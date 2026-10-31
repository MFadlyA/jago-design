import { useState, useRef } from 'react';
import {
  getSlotAdjustmentConfig,
  applyImageToTemplateSlot
} from '../utils/slotAdjustments';

export function useSlotUpload(templateData, showToast) {
  const [selectedSlot, setSelectedSlot] = useState({
    template: 't1',
    type: 'podium',
    index: 0
  });

  const fileInputRef = useRef(null);

  const triggerSlotUpload = (slotConfig) => {
    setSelectedSlot(slotConfig);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const applyImageToSlot = (imageUrl, targetSlot = selectedSlot) => {
    applyImageToTemplateSlot(imageUrl, targetSlot, templateData);
    if (showToast) {
      showToast('Foto terpasang (Rasio Utuh)!');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      applyImageToSlot(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const activeAdjustments = getSlotAdjustmentConfig(selectedSlot, templateData);

  return {
    selectedSlot,
    setSelectedSlot,
    fileInputRef,
    triggerSlotUpload,
    applyImageToSlot,
    handleFileChange,
    activeAdjustments
  };
}

