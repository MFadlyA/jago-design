import { useState, useRef, useEffect } from 'react';
import {
  getPosterExportFilename,
  downloadElementAsPng,
  downloadElementUnder2MB
} from '../utils/exportUtils';

export function usePosterExport({ activeTemplate, t1Data, t2Data, t4Data, t5Data, showToast }) {
  const [isExporting, setIsExporting] = useState(false);
  const [exportingMode, setExportingMode] = useState(null); // 'hd' | 'under2mb' | null
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
    setExportingMode('hd');
    try {
      const filename = getPosterExportFilename(activeTemplate, { t1Data, t2Data, t4Data, t5Data });
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
      setExportingMode(null);
    }
  };

  const handleDownloadPosterUnder2MB = async () => {
    if (!posterRef.current) return;
    setIsExporting(true);
    setExportingMode('under2mb');
    try {
      const filename = getPosterExportFilename(activeTemplate, { t1Data, t2Data, t4Data, t5Data });
      const result = await downloadElementUnder2MB(posterRef.current, filename);
      if (showToast) {
        showToast(`Poster (< 2 MB) berhasil diunduh! (${result.sizeFormatted})`);
      }
    } catch (err) {
      console.error(err);
      if (showToast) {
        showToast(err.message || 'Gunakan gambar lokal/upload langsung jika URL terhambat CORS.');
      }
    } finally {
      setIsExporting(false);
      setExportingMode(null);
    }
  };

  return {
    posterRef,
    isExporting,
    exportingMode,
    handleDownloadPoster,
    handleDownloadPosterUnder2MB
  };
}
