import React, { useState } from 'react';
import Toast from './components/common/Toast';
import AppHeader from './components/layout/AppHeader';
import AppSidebar from './components/sidebar/AppSidebar';
import PosterCanvas from './components/layout/PosterCanvas';

import {
  useTemplateState,
  useSlotUpload,
  usePosterExport
} from './hooks';

// ============================================================================
// MAIN STUDIO APPLICATION (LEAN ORCHESTRATOR)
// ============================================================================
export default function App() {
  const [activeSidebarTab, setActiveSidebarTab] = useState('images'); // 'images' | 'texts' | 'presets'
  const [zoom, setZoom] = useState(0.72);
  const [showParticles, setShowParticles] = useState(true);
  const [toastMessage, setToastMessage] = useState(null);
  const [showTips, setShowTips] = useState(true);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const {
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
  } = useTemplateState();

  const templateData = {
    t1Data, setT1Data,
    t2Data, setT2Data,
    t3Data, setT3Data,
    t4Data, setT4Data,
    t5Data, setT5Data
  };

  const {
    selectedSlot,
    setSelectedSlot,
    fileInputRef,
    triggerSlotUpload,
    handleFileChange,
    activeAdjustments
  } = useSlotUpload(templateData, showToast);

  const {
    posterRef,
    isExporting,
    handleDownloadPoster
  } = usePosterExport({
    activeTemplate,
    t2Data,
    t4Data,
    t5Data,
    showToast
  });

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} />

      {/* Top Header Bar */}
      <AppHeader
        activeTemplate={activeTemplate}
        setActiveTemplate={setActiveTemplate}
        setSelectedSlot={setSelectedSlot}
        setZoom={setZoom}
        setActiveSidebarTab={setActiveSidebarTab}
        posterTheme={posterTheme}
        setPosterTheme={setPosterTheme}
        showToast={showToast}
        activePrimaryDerived={activePrimaryDerived}
        onResetTemplate={() => handleResetTemplate(showToast)}
        onDownloadPoster={handleDownloadPoster}
        isExporting={isExporting}
      />

      {/* Main Studio Workspace */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Control Sidebar */}
        <AppSidebar
          activeSidebarTab={activeSidebarTab}
          setActiveSidebarTab={setActiveSidebarTab}
          activeTemplate={activeTemplate}
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
          activeAdjustments={activeAdjustments}
          triggerSlotUpload={triggerSlotUpload}
          showToast={showToast}
          t1Data={t1Data}
          setT1Data={setT1Data}
          t2Data={t2Data}
          setT2Data={setT2Data}
          t3Data={t3Data}
          setT3Data={setT3Data}
          t4Data={t4Data}
          setT4Data={setT4Data}
          t5Data={t5Data}
          setT5Data={setT5Data}
          getActiveTemplateColors={getActiveTemplateColors}
          handleUpdateActiveTemplateColors={handleUpdateActiveTemplateColors}
          handleResetActiveTemplateColors={handleResetActiveTemplateColors}
          posterTheme={posterTheme}
          setPosterTheme={setPosterTheme}
          showParticles={showParticles}
          setShowParticles={setShowParticles}
        />

        {/* Scalable Artboard Canvas Workspace */}
        <PosterCanvas
          showTips={showTips}
          setShowTips={setShowTips}
          zoom={zoom}
          setZoom={setZoom}
          activeTemplate={activeTemplate}
          posterTheme={posterTheme}
          artboardCssVars={artboardCssVars}
          t1Data={t1Data}
          setT1Data={setT1Data}
          t2Data={t2Data}
          setT2Data={setT2Data}
          t3Data={t3Data}
          setT3Data={setT3Data}
          t4Data={t4Data}
          setT4Data={setT4Data}
          t5Data={t5Data}
          setT5Data={setT5Data}
          posterRef={posterRef}
          activePrimaryDerived={activePrimaryDerived}
          currentColors={currentColors}
          showParticles={showParticles}
          triggerSlotUpload={triggerSlotUpload}
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
        />
      </div>
    </div>
  );
}
