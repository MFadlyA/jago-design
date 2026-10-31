import React from 'react';
import CanvasToolbar from './CanvasToolbar';
import Template1Catalog from '../templates/Template1Catalog';
import Template2Showcase from '../templates/Template2Showcase';
import Template3QA from '../Template3QA';
import Template4Requirements from '../Template4Requirements';
import Template5Screenshots from '../Template5Screenshots';
import { JagoGamesCrestLogo, ReadyStockRibbon } from '../badges';

export default function PosterCanvas({
  showTips,
  setShowTips,
  zoom,
  setZoom,
  activeTemplate,
  posterTheme,
  artboardCssVars,
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
  posterRef,
  activePrimaryDerived,
  currentColors,
  showParticles,
  triggerSlotUpload,
  selectedSlot,
  setSelectedSlot
}) {
  return (
    <main className="flex-1 canvas-grid-bg relative overflow-auto flex flex-col items-center justify-start p-4 sm:p-8 min-h-[calc(100vh-4rem)]">
      {/* Floating Canvas Controls Bar */}
      <CanvasToolbar
        showTips={showTips}
        setShowTips={setShowTips}
        zoom={zoom}
        setZoom={setZoom}
        activeTemplate={activeTemplate}
      />

      {/* SCALABLE POSTER ARTBOARD */}
      <div
        className={`transition-transform origin-top duration-150 rounded-[4px] shadow-[0_30px_90px_rgba(0,0,0,0.95)] ring-1 ring-white/10 ${
          posterTheme === 'calm' ? 'theme-calm' : 'theme-classic'
        }`}
        style={{ transform: `scale(${zoom})`, ...artboardCssVars }}
      >
        {activeTemplate === 'template1' ? (
          <Template1Catalog
            t1Data={t1Data}
            setT1Data={setT1Data}
            posterRef={posterRef}
            artboardCssVars={artboardCssVars}
            activePrimaryDerived={activePrimaryDerived}
            currentColors={currentColors}
            showParticles={showParticles}
            triggerSlotUpload={triggerSlotUpload}
            setSelectedSlot={setSelectedSlot}
          />
        ) : activeTemplate === 'template2' ? (
          <Template2Showcase
            t2Data={t2Data}
            setT2Data={setT2Data}
            posterRef={posterRef}
            artboardCssVars={artboardCssVars}
            activePrimaryDerived={activePrimaryDerived}
            showParticles={showParticles}
            triggerSlotUpload={triggerSlotUpload}
            setSelectedSlot={setSelectedSlot}
          />
        ) : activeTemplate === 'template3' ? (
          <Template3QA
            t3Data={t3Data}
            setT3Data={setT3Data}
            posterTheme={posterTheme}
            showParticles={showParticles}
            posterRef={posterRef}
            triggerSlotUpload={triggerSlotUpload}
            selectedSlot={selectedSlot}
            setSelectedSlot={setSelectedSlot}
            JagoGamesCrestLogo={JagoGamesCrestLogo}
            ReadyStockRibbon={ReadyStockRibbon}
          />
        ) : activeTemplate === 'template4' ? (
          <Template4Requirements
            t4Data={t4Data}
            setT4Data={setT4Data}
            posterTheme={posterTheme}
            showParticles={showParticles}
            posterRef={posterRef}
            triggerSlotUpload={triggerSlotUpload}
            selectedSlot={selectedSlot}
            setSelectedSlot={setSelectedSlot}
            JagoGamesCrestLogo={JagoGamesCrestLogo}
            ReadyStockRibbon={ReadyStockRibbon}
          />
        ) : (
          <Template5Screenshots
            t5Data={t5Data}
            setT5Data={setT5Data}
            posterTheme={posterTheme}
            showParticles={showParticles}
            posterRef={posterRef}
            triggerSlotUpload={triggerSlotUpload}
            selectedSlot={selectedSlot}
            setSelectedSlot={setSelectedSlot}
            JagoGamesCrestLogo={JagoGamesCrestLogo}
            ReadyStockRibbon={ReadyStockRibbon}
          />
        )}
      </div>
    </main>
  );
}

