import { useState } from 'react';
import { INITIAL_TEMPLATE_1, INITIAL_TEMPLATE_2 } from '../constants/templateDefaults';
import {
  INITIAL_TEMPLATE_3,
  INITIAL_TEMPLATE_4,
  INITIAL_TEMPLATE_5
} from '../data/templatePresets';
import {
  DEFAULT_TEMPLATE_COLORS,
  getDerivedColors,
  rgbToHex,
  buildArtboardCssVars
} from '../utils/colorUtils';

export function useTemplateState() {
  const [activeTemplate, setActiveTemplate] = useState('template1'); // 'template1' | 'template2' | 'template3' | 'template4' | 'template5'
  const [posterTheme, setPosterTheme] = useState('calm'); // 'calm' | 'classic'
  const [t1Data, setT1Data] = useState(INITIAL_TEMPLATE_1);
  const [t2Data, setT2Data] = useState(INITIAL_TEMPLATE_2);
  const [t3Data, setT3Data] = useState(INITIAL_TEMPLATE_3);
  const [t4Data, setT4Data] = useState(INITIAL_TEMPLATE_4);
  const [t5Data, setT5Data] = useState(INITIAL_TEMPLATE_5);

  const getActiveTemplateColors = () => {
    if (activeTemplate === 'template1') return t1Data.colors || DEFAULT_TEMPLATE_COLORS.template1;
    if (activeTemplate === 'template2') return t2Data.colors || DEFAULT_TEMPLATE_COLORS.template2;
    if (activeTemplate === 'template3') return t3Data.colors || DEFAULT_TEMPLATE_COLORS.template3;
    if (activeTemplate === 'template4') return t4Data.colors || DEFAULT_TEMPLATE_COLORS.template4;
    if (activeTemplate === 'template5') return t5Data.colors || DEFAULT_TEMPLATE_COLORS.template5;
    return DEFAULT_TEMPLATE_COLORS.template1;
  };

  const handleUpdateActiveTemplateColors = (newColors) => {
    if (activeTemplate === 'template1') {
      setT1Data((prev) => ({ ...prev, colors: newColors }));
    } else if (activeTemplate === 'template2') {
      const cardGlowHex = newColors.cardGlow
        ? rgbToHex(newColors.cardGlow.r, newColors.cardGlow.g, newColors.cardGlow.b)
        : t2Data.cardGlowColor;
      setT2Data((prev) => ({ ...prev, colors: newColors, cardGlowColor: cardGlowHex }));
    } else if (activeTemplate === 'template3') {
      setT3Data((prev) => ({ ...prev, colors: newColors }));
    } else if (activeTemplate === 'template4') {
      setT4Data((prev) => ({ ...prev, colors: newColors }));
    } else if (activeTemplate === 'template5') {
      setT5Data((prev) => ({ ...prev, colors: newColors }));
    }
  };

  const handleResetActiveTemplateColors = () => {
    const defaults = DEFAULT_TEMPLATE_COLORS[activeTemplate] || DEFAULT_TEMPLATE_COLORS.template1;
    handleUpdateActiveTemplateColors(defaults);
  };

  const handleResetTemplate = (showToast) => {
    if (activeTemplate === 'template1') setT1Data(INITIAL_TEMPLATE_1);
    else if (activeTemplate === 'template2') setT2Data(INITIAL_TEMPLATE_2);
    else if (activeTemplate === 'template3') setT3Data(INITIAL_TEMPLATE_3);
    else if (activeTemplate === 'template4') setT4Data(INITIAL_TEMPLATE_4);
    else if (activeTemplate === 'template5') setT5Data(INITIAL_TEMPLATE_5);
    if (showToast) {
      showToast('Template dikembalikan ke pengaturan awal');
    }
  };

  const currentColors = getActiveTemplateColors();
  const artboardCssVars = buildArtboardCssVars(currentColors);
  const activePrimaryDerived = getDerivedColors(currentColors.primary);

  return {
    activeTemplate,
    setActiveTemplate,
    posterTheme,
    setPosterTheme,
    t1Data,
    setT1Data,
    t2Data,
    setT2Data,
    t3Data,
    setT3Data,
    t4Data,
    setT4Data,
    t5Data,
    setT5Data,
    currentColors,
    artboardCssVars,
    activePrimaryDerived,
    getActiveTemplateColors,
    handleUpdateActiveTemplateColors,
    handleResetActiveTemplateColors,
    handleResetTemplate
  };
}

