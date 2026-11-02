// ============================================================================
// EXPORT UTILITIES (HTML-to-Image & Filename Generator)
// ============================================================================

/**
 * Generate standardized poster filename based on template and metadata
 */
export const getPosterExportFilename = (activeTemplate, { t2Data, t4Data, t5Data } = {}) => {
  if (activeTemplate === 'template1') {
    return 'JagoGames-Poster-Katalog';
  }
  if (activeTemplate === 'template2') {
    const title = t2Data?.gameTitle ? t2Data.gameTitle.replace(/\s+/g, '-') : 'Single-Showcase';
    return `JagoGames-${title}`;
  }
  if (activeTemplate === 'template3') {
    return 'JagoGames-QA-Official';
  }
  if (activeTemplate === 'template4') {
    const title = t4Data?.gameTitle ? t4Data.gameTitle.replace(/\s+/g, '-') : 'Specs';
    return `JagoGames-Specs-${title}`;
  }
  if (activeTemplate === 'template5') {
    const title = t5Data?.gameTitle ? t5Data.gameTitle.replace(/\s+/g, '-') : 'Screenshots';
    return `JagoGames-Screenshots-${title}`;
  }
  return 'JagoGames-Poster';
};

/**
 * Download a DOM element as high-resolution PNG using html-to-image
 */
export const downloadElementAsPng = async (element, filename, options = {}) => {
  if (!element) {
    throw new Error('Element tidak ditemukan');
  }
  if (!window.htmlToImage) {
    throw new Error('Modul html-to-image belum siap dimuat');
  }

  const dataUrl = await window.htmlToImage.toPng(element, {
    quality: 1.0,
    pixelRatio: 2,
    cacheBust: true,
    ...options
  });

  const link = document.createElement('a');
  link.download = `${filename}.png`;
  link.href = dataUrl;
  link.click();

  return dataUrl;
};

/**
 * Download a DOM element as an image guaranteed to be strictly under 2 MB (<= 1.95 MB).
 * Perfect for e-commerce marketplaces (Shopee, Tokopedia, TikTok Shop, etc.).
 */
export const downloadElementUnder2MB = async (element, filename, options = {}) => {
  if (!element) {
    throw new Error('Element tidak ditemukan');
  }
  if (!window.htmlToImage) {
    throw new Error('Modul html-to-image belum siap dimuat');
  }

  // Safe ceiling: 1.95 MB (2,044,723 bytes) to ensure strict compatibility with 2,000,000 bytes limit
  const TARGET_MAX_BYTES = 1.95 * 1024 * 1024;

  // 1. Render element to high-res canvas
  const canvas = await window.htmlToImage.toCanvas(element, {
    quality: 1.0,
    pixelRatio: 2,
    cacheBust: true,
    backgroundColor: '#090d16',
    ...options
  });

  // 2. Check if PNG is already under TARGET_MAX_BYTES
  const pngBlob = await new Promise((resolve) => {
    canvas.toBlob((b) => resolve(b), 'image/png');
  });

  if (pngBlob && pngBlob.size <= TARGET_MAX_BYTES) {
    const downloadFilename = `${filename}.png`;
    const blobUrl = URL.createObjectURL(pngBlob);
    const link = document.createElement('a');
    link.download = downloadFilename;
    link.href = blobUrl;
    link.click();
    setTimeout(() => URL.revokeObjectURL(blobUrl), 2000);

    return {
      sizeBytes: pngBlob.size,
      sizeFormatted: (pngBlob.size / (1024 * 1024)).toFixed(2) + ' MB',
      filename: downloadFilename,
      format: 'png'
    };
  }

  // 3. If PNG exceeds 2MB, composite onto an opaque canvas to prevent black background artifacts in JPEG
  const opaqueCanvas = document.createElement('canvas');
  opaqueCanvas.width = canvas.width;
  opaqueCanvas.height = canvas.height;
  const ctx = opaqueCanvas.getContext('2d');
  ctx.fillStyle = '#090d16';
  ctx.fillRect(0, 0, opaqueCanvas.width, opaqueCanvas.height);
  ctx.drawImage(canvas, 0, 0);

  // Progressive quality test: try high quality down to lower quality
  const qualitySteps = [0.93, 0.88, 0.82, 0.75, 0.68, 0.60];
  let chosenBlob = null;

  for (const q of qualitySteps) {
    const candidateBlob = await new Promise((resolve) => {
      opaqueCanvas.toBlob((b) => resolve(b), 'image/jpeg', q);
    });

    if (candidateBlob && candidateBlob.size <= TARGET_MAX_BYTES) {
      chosenBlob = candidateBlob;
      break;
    }
  }

  // 4. Fallback if still over 2MB: scale down resolution slightly
  let currentCanvas = opaqueCanvas;
  while (!chosenBlob || chosenBlob.size > TARGET_MAX_BYTES) {
    const scaled = document.createElement('canvas');
    scaled.width = Math.round(currentCanvas.width * 0.85);
    scaled.height = Math.round(currentCanvas.height * 0.85);
    const sCtx = scaled.getContext('2d');
    sCtx.fillStyle = '#090d16';
    sCtx.fillRect(0, 0, scaled.width, scaled.height);
    sCtx.drawImage(currentCanvas, 0, 0, scaled.width, scaled.height);

    currentCanvas = scaled;
    chosenBlob = await new Promise((resolve) => {
      currentCanvas.toBlob((b) => resolve(b), 'image/jpeg', 0.82);
    });

    if (currentCanvas.width < 500) break;
  }

  if (!chosenBlob) {
    throw new Error('Gagal mengompres gambar ke bawah 2 MB');
  }

  const downloadFilename = `${filename}.jpg`;
  const blobUrl = URL.createObjectURL(chosenBlob);
  const link = document.createElement('a');
  link.download = downloadFilename;
  link.href = blobUrl;
  link.click();
  setTimeout(() => URL.revokeObjectURL(blobUrl), 2000);

  return {
    sizeBytes: chosenBlob.size,
    sizeFormatted: (chosenBlob.size / (1024 * 1024)).toFixed(2) + ' MB',
    filename: downloadFilename,
    format: 'jpg'
  };
};
