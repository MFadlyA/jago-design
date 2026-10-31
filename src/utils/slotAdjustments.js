// ============================================================================
// SLOT ADJUSTMENT UTILITIES & OPTIONS
// ============================================================================

/**
 * Returns available slot chips options for the currently active template
 */
export const getTemplateSlotOptions = (activeTemplate) => {
  if (activeTemplate === 'template1') {
    return [
      { id: 'p0', template: 't1', type: 'podium', index: 0, label: 'Podium 1' },
      { id: 'p1', template: 't1', type: 'podium', index: 1, label: 'Podium 2' },
      { id: 'p2', template: 't1', type: 'podium', index: 2, label: 'Podium 3' },
      { id: 'p3', template: 't1', type: 'podium', index: 3, label: 'Podium 4' },
      { id: 'c0', template: 't1', type: 'category', index: 0, label: 'Koleksi 1' },
      { id: 'c1', template: 't1', type: 'category', index: 1, label: 'Koleksi 2' },
      { id: 'c2', template: 't1', type: 'category', index: 2, label: 'Koleksi 3' },
      { id: 'ps5', template: 't1', type: 'centerpiece', label: 'PS5 Tengah' },
      { id: 'logo', template: 't1', type: 'logo', label: 'Logo Brand' },
      { id: 'bg', template: 't1', type: 'bgOverlay', label: 'Background' }
    ];
  }
  if (activeTemplate === 'template2') {
    return [
      { id: 'cover', template: 't2', type: 'cover', label: 'Cover Game' },
      { id: 'logo', template: 't2', type: 'logo', label: 'Logo Brand' },
      { id: 'bg', template: 't2', type: 'bgOverlay', label: 'Background' }
    ];
  }
  if (activeTemplate === 'template3') {
    return [
      { id: 'logo', template: 't3', type: 'logo', label: 'Logo Brand' },
      { id: 'bg', template: 't3', type: 'bgOverlay', label: 'Background' }
    ];
  }
  if (activeTemplate === 'template4') {
    return [
      { id: 'logo', template: 't4', type: 'logo', label: 'Logo Brand' },
      { id: 'bg', template: 't4', type: 'bgOverlay', label: 'Background' }
    ];
  }
  if (activeTemplate === 'template5') {
    return [
      { id: 'ss0', template: 't5', type: 'screenshot', index: 0, label: 'Foto #1' },
      { id: 'ss1', template: 't5', type: 'screenshot', index: 1, label: 'Foto #2' },
      { id: 'ss2', template: 't5', type: 'screenshot', index: 2, label: 'Foto #3' },
      { id: 'ss3', template: 't5', type: 'screenshot', index: 3, label: 'Foto #4' },
      { id: 'logo', template: 't5', type: 'logo', label: 'Logo Brand' },
      { id: 'bg', template: 't5', type: 'bgOverlay', label: 'Background' }
    ];
  }
  return [];
};

/**
 * Returns configuration for fine-tuning the currently selected slot
 */
export const getSlotAdjustmentConfig = (
  selectedSlot,
  {
    t1Data,
    setT1Data,
    t2Data,
    setT2Data,
    t3Data,
    setT3Data,
    t4Data,
    setT4Data,
    t5Data,
    setT5Data
  }
) => {
  if (!selectedSlot) return null;
  const { template, type, index } = selectedSlot;

  // --- TEMPLATE 1 ---
  if (template === 't1') {
    if (type === 'podium') {
      const s = t1Data.podiumSlots[index];
      if (!s) return null;
      return {
        label: `Podium Slot #${index + 1}`,
        zoom: s.zoom ?? 1,
        x: s.x ?? 0,
        y: s.y ?? 0,
        fit: s.fit ?? 'contain',
        onChange: (patch) => {
          const updated = [...t1Data.podiumSlots];
          updated[index] = { ...s, ...patch };
          setT1Data({ ...t1Data, podiumSlots: updated });
        }
      };
    }
    if (type === 'category') {
      const c = t1Data.categories[index];
      if (!c) return null;
      return {
        label: `Kartu Koleksi #${index + 1} (${c.line1 || 'Kategori'})`,
        zoom: c.zoom ?? 1,
        x: c.x ?? 0,
        y: c.y ?? 0,
        fit: c.fit ?? 'contain',
        onChange: (patch) => {
          const updated = [...t1Data.categories];
          updated[index] = { ...c, ...patch };
          setT1Data({ ...t1Data, categories: updated });
        }
      };
    }
    if (type === 'centerpiece') {
      return {
        label: 'Konsol / Objek Tengah (T1)',
        zoom: t1Data.centerpieceZoom ?? 1,
        x: t1Data.centerpieceX ?? 0,
        y: t1Data.centerpieceY ?? 0,
        fit: t1Data.centerpieceFit ?? 'contain',
        onChange: (patch) => {
          setT1Data({
            ...t1Data,
            centerpieceZoom: patch.zoom ?? t1Data.centerpieceZoom ?? 1,
            centerpieceX: patch.x ?? t1Data.centerpieceX ?? 0,
            centerpieceY: patch.y ?? t1Data.centerpieceY ?? 0,
            centerpieceFit: patch.fit ?? t1Data.centerpieceFit ?? 'contain'
          });
        }
      };
    }
    if (type === 'logo') {
      return {
        label: 'Logo Brand (Katalog)',
        zoom: t1Data.logoZoom ?? 1,
        x: t1Data.logoX ?? 0,
        y: t1Data.logoY ?? 0,
        fit: t1Data.logoFit ?? 'contain',
        onChange: (patch) => {
          setT1Data({
            ...t1Data,
            logoZoom: patch.zoom ?? t1Data.logoZoom ?? 1,
            logoX: patch.x ?? t1Data.logoX ?? 0,
            logoY: patch.y ?? t1Data.logoY ?? 0,
            logoFit: patch.fit ?? t1Data.logoFit ?? 'contain'
          });
        }
      };
    }
    if (type === 'bgOverlay') {
      return {
        label: 'Background Kustom (T1)',
        zoom: t1Data.bgZoom ?? 1,
        x: t1Data.bgX ?? 0,
        y: t1Data.bgY ?? 0,
        fit: t1Data.bgFit ?? 'cover',
        onChange: (patch) => {
          setT1Data({
            ...t1Data,
            bgZoom: patch.zoom ?? t1Data.bgZoom ?? 1,
            bgX: patch.x ?? t1Data.bgX ?? 0,
            bgY: patch.y ?? t1Data.bgY ?? 0,
            bgFit: patch.fit ?? t1Data.bgFit ?? 'cover'
          });
        }
      };
    }
  }

  // --- TEMPLATE 2 ---
  if (template === 't2') {
    if (type === 'cover') {
      return {
        label: `Cover Game (${t2Data.gameTitle})`,
        zoom: t2Data.coverZoom ?? 1,
        x: t2Data.coverX ?? 0,
        y: t2Data.coverY ?? 0,
        fit: t2Data.coverFit ?? 'contain',
        onChange: (patch) => {
          setT2Data({
            ...t2Data,
            coverZoom: patch.zoom ?? t2Data.coverZoom ?? 1,
            coverX: patch.x ?? t2Data.coverX ?? 0,
            coverY: patch.y ?? t2Data.coverY ?? 0,
            coverFit: patch.fit ?? t2Data.coverFit ?? 'contain'
          });
        }
      };
    }
    if (type === 'logo') {
      return {
        label: 'Logo Brand (Single Showcase)',
        zoom: t2Data.logoZoom ?? 1,
        x: t2Data.logoX ?? 0,
        y: t2Data.logoY ?? 0,
        fit: t2Data.logoFit ?? 'contain',
        onChange: (patch) => {
          setT2Data({
            ...t2Data,
            logoZoom: patch.zoom ?? t2Data.logoZoom ?? 1,
            logoX: patch.x ?? t2Data.logoX ?? 0,
            logoY: patch.y ?? t2Data.logoY ?? 0,
            logoFit: patch.fit ?? t2Data.logoFit ?? 'contain'
          });
        }
      };
    }
    if (type === 'bgOverlay') {
      return {
        label: 'Background Kustom (T2)',
        zoom: t2Data.bgZoom ?? 1,
        x: t2Data.bgX ?? 0,
        y: t2Data.bgY ?? 0,
        fit: t2Data.bgFit ?? 'cover',
        onChange: (patch) => {
          setT2Data({
            ...t2Data,
            bgZoom: patch.zoom ?? t2Data.bgZoom ?? 1,
            bgX: patch.x ?? t2Data.bgX ?? 0,
            bgY: patch.y ?? t2Data.bgY ?? 0,
            bgFit: patch.fit ?? t2Data.bgFit ?? 'cover'
          });
        }
      };
    }
  }

  // --- TEMPLATE 3 ---
  if (template === 't3') {
    if (type === 'logo') {
      return {
        label: 'Logo Brand (Q & A Info)',
        zoom: t3Data.logoZoom ?? 1,
        x: t3Data.logoX ?? 0,
        y: t3Data.logoY ?? 0,
        fit: t3Data.logoFit ?? 'contain',
        onChange: (patch) => {
          setT3Data({
            ...t3Data,
            logoZoom: patch.zoom ?? t3Data.logoZoom ?? 1,
            logoX: patch.x ?? t3Data.logoX ?? 0,
            logoY: patch.y ?? t3Data.logoY ?? 0,
            logoFit: patch.fit ?? t3Data.logoFit ?? 'contain'
          });
        }
      };
    }
    if (type === 'bgOverlay') {
      return {
        label: 'Background Kustom (Q & A)',
        zoom: t3Data.bgZoom ?? 1,
        x: t3Data.bgX ?? 0,
        y: t3Data.bgY ?? 0,
        fit: t3Data.bgFit ?? 'cover',
        onChange: (patch) => {
          setT3Data({
            ...t3Data,
            bgZoom: patch.zoom ?? t3Data.bgZoom ?? 1,
            bgX: patch.x ?? t3Data.bgX ?? 0,
            bgY: patch.y ?? t3Data.bgY ?? 0,
            bgFit: patch.fit ?? t3Data.bgFit ?? 'cover'
          });
        }
      };
    }
  }

  // --- TEMPLATE 4 ---
  if (template === 't4') {
    if (type === 'logo') {
      return {
        label: 'Logo Brand (Spesifikasi PC)',
        zoom: t4Data.logoZoom ?? 1,
        x: t4Data.logoX ?? 0,
        y: t4Data.logoY ?? 0,
        fit: t4Data.logoFit ?? 'contain',
        onChange: (patch) => {
          setT4Data({
            ...t4Data,
            logoZoom: patch.zoom ?? t4Data.logoZoom ?? 1,
            logoX: patch.x ?? t4Data.logoX ?? 0,
            logoY: patch.y ?? t4Data.logoY ?? 0,
            logoFit: patch.fit ?? t4Data.logoFit ?? 'contain'
          });
        }
      };
    }
    if (type === 'bgOverlay') {
      return {
        label: 'Background Kustom (Spesifikasi)',
        zoom: t4Data.bgZoom ?? 1,
        x: t4Data.bgX ?? 0,
        y: t4Data.bgY ?? 0,
        fit: t4Data.bgFit ?? 'cover',
        onChange: (patch) => {
          setT4Data({
            ...t4Data,
            bgZoom: patch.zoom ?? t4Data.bgZoom ?? 1,
            bgX: patch.x ?? t4Data.bgX ?? 0,
            bgY: patch.y ?? t4Data.bgY ?? 0,
            bgFit: patch.fit ?? t4Data.bgFit ?? 'cover'
          });
        }
      };
    }
  }

  // --- TEMPLATE 5 ---
  if (template === 't5') {
    if (type === 'screenshot') {
      const s = t5Data.screenshots[index];
      if (!s) return null;
      return {
        label: `Screenshot #${index + 1} (${s.title || 'Scene'})`,
        zoom: s.zoom ?? 1,
        x: s.x ?? 0,
        y: s.y ?? 0,
        fit: s.fit ?? 'contain',
        onChange: (patch) => {
          const updated = [...t5Data.screenshots];
          updated[index] = { ...s, ...patch };
          setT5Data({ ...t5Data, screenshots: updated });
        }
      };
    }
    if (type === 'logo') {
      return {
        label: 'Logo Brand (Gameplay Galeri)',
        zoom: t5Data.logoZoom ?? 1,
        x: t5Data.logoX ?? 0,
        y: t5Data.logoY ?? 0,
        fit: t5Data.logoFit ?? 'contain',
        onChange: (patch) => {
          setT5Data({
            ...t5Data,
            logoZoom: patch.zoom ?? t5Data.logoZoom ?? 1,
            logoX: patch.x ?? t5Data.logoX ?? 0,
            logoY: patch.y ?? t5Data.logoY ?? 0,
            logoFit: patch.fit ?? t5Data.logoFit ?? 'contain'
          });
        }
      };
    }
    if (type === 'bgOverlay') {
      return {
        label: 'Background Kustom (Galeri)',
        zoom: t5Data.bgZoom ?? 1,
        x: t5Data.bgX ?? 0,
        y: t5Data.bgY ?? 0,
        fit: t5Data.bgFit ?? 'cover',
        onChange: (patch) => {
          setT5Data({
            ...t5Data,
            bgZoom: patch.zoom ?? t5Data.bgZoom ?? 1,
            bgX: patch.x ?? t5Data.bgX ?? 0,
            bgY: patch.y ?? t5Data.bgY ?? 0,
            bgFit: patch.fit ?? t5Data.bgFit ?? 'cover'
          });
        }
      };
    }
  }

  return null;
};

/**
 * Apply uploaded image URL into targeted template slot
 */
export const applyImageToTemplateSlot = (
  imageUrl,
  targetSlot,
  {
    t1Data,
    setT1Data,
    t2Data,
    setT2Data,
    t3Data,
    setT3Data,
    t4Data,
    setT4Data,
    t5Data,
    setT5Data
  }
) => {
  if (!targetSlot) return;

  if (targetSlot.template === 't1') {
    if (targetSlot.type === 'podium') {
      const updated = t1Data.podiumSlots.map((slot, i) =>
        i === targetSlot.index ? { ...slot, image: imageUrl, zoom: 1, x: 0, y: 0, fit: 'contain' } : slot
      );
      setT1Data({ ...t1Data, podiumSlots: updated });
    } else if (targetSlot.type === 'category') {
      const updated = t1Data.categories.map((cat, i) =>
        i === targetSlot.index ? { ...cat, image: imageUrl, zoom: 1, x: 0, y: 0, fit: 'contain' } : cat
      );
      setT1Data({ ...t1Data, categories: updated });
    } else if (targetSlot.type === 'logo') {
      setT1Data({ ...t1Data, logoCustom: imageUrl, logoFit: 'contain' });
    } else if (targetSlot.type === 'centerpiece') {
      setT1Data({ ...t1Data, customCenterpiece: imageUrl, centerpieceFit: 'contain' });
    } else if (targetSlot.type === 'bgOverlay') {
      setT1Data({ ...t1Data, customBgOverlay: imageUrl, bgFit: 'cover' });
    }
  } else if (targetSlot.template === 't2') {
    if (targetSlot.type === 'cover') {
      setT2Data({
        ...t2Data,
        gameCover: imageUrl,
        coverZoom: 1,
        coverX: 0,
        coverY: 0,
        coverFit: 'contain'
      });
    } else if (targetSlot.type === 'logo') {
      setT2Data({ ...t2Data, logoCustom: imageUrl, logoFit: 'contain' });
    } else if (targetSlot.type === 'bgOverlay') {
      setT2Data({ ...t2Data, customBgOverlay: imageUrl, bgFit: 'cover' });
    }
  } else if (targetSlot.template === 't3') {
    if (targetSlot.type === 'logo') {
      setT3Data({ ...t3Data, logoCustom: imageUrl, logoFit: 'contain' });
    } else if (targetSlot.type === 'bgOverlay') {
      setT3Data({ ...t3Data, customBgOverlay: imageUrl, bgFit: 'cover' });
    }
  } else if (targetSlot.template === 't4') {
    if (targetSlot.type === 'logo') {
      setT4Data({ ...t4Data, logoCustom: imageUrl, logoFit: 'contain' });
    } else if (targetSlot.type === 'bgOverlay') {
      setT4Data({ ...t4Data, customBgOverlay: imageUrl, bgFit: 'cover' });
    }
  } else if (targetSlot.template === 't5') {
    if (targetSlot.type === 'screenshot') {
      const updated = t5Data.screenshots.map((s, i) =>
        i === targetSlot.index ? { ...s, image: imageUrl, zoom: 1, x: 0, y: 0, fit: 'contain' } : s
      );
      setT5Data({ ...t5Data, screenshots: updated });
    } else if (targetSlot.type === 'logo') {
      setT5Data({ ...t5Data, logoCustom: imageUrl, logoFit: 'contain' });
    } else if (targetSlot.type === 'bgOverlay') {
      setT5Data({ ...t5Data, customBgOverlay: imageUrl, bgFit: 'cover' });
    }
  }
};

