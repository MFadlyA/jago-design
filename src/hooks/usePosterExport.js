import { useState, useRef, useEffect } from 'react';
import { getPosterExportFilename, downloadElementAsPng } from '../utils/exportUtils';

export function usePosterExport({ activeTemplate, t2Data, t4Data, t5Data, showToast }) {
  const [isExporting, setIsExporting] = useState(false);
  const posterRef = useRef(null);

  // Load html-to-image for HD PNG download
  useEffect(() => {
    if (!window.htmlToImage) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html-to-image/1.11.11/html-to-image.min.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleDownloadPoster = async () => {
    if (!posterRef.current) return;
    setIsExporting(true);
    try {
      const filename = getPosterExportFilename(activeTemplate, { t2Data, t4Data, t5Data });
      await downloadElementAsPng(posterRef.current, filename);
      if (showToast) {
        showToast('Poster HD berhasil diunduh!');
      }
    } catch (err) {
      console.error(err);
      if (showToast) {
        showToast(err.message || 'Gunakan gambar lokal/upload langsung jika URL terhambat CORS.');
      }
    } finally {
      setIsExporting(false);
    }
  };

  return {
    posterRef,
    isExporting,
    handleDownloadPoster
  };
}

