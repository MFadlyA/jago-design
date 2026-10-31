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

