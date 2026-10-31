import React from 'react';
import {
  Image as ImageIcon,
  Type,
  Wand2
} from 'lucide-react';

import PhotoAdjustmentBox from '../common/PhotoAdjustmentBox';
import {
  Template1ImagesControls,
  Template1TextsControls
} from './Template1Controls';
import {
  Template2ImagesControls,
  Template2TextsControls
} from './Template2Controls';
import {
  Template3ImagesControls,
  Template3TextsControls,
  Template4ImagesControls,
  Template4TextsControls,
  Template5ImagesControls,
  Template5TextsControls
} from '../SidebarTemplatesControls';
import SidebarPresetsTab from './SidebarPresetsTab';

export default function AppSidebar({
  activeSidebarTab,
  setActiveSidebarTab,
  activeTemplate,
  selectedSlot,
  setSelectedSlot,
  activeAdjustments,
  triggerSlotUpload,
  showToast,
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
  getActiveTemplateColors,
  handleUpdateActiveTemplateColors,
  handleResetActiveTemplateColors,
  posterTheme,
  setPosterTheme,
  showParticles,
  setShowParticles
}) {
  return (
    <aside className="w-full lg:w-[370px] bg-[#0d121f] border-b lg:border-b-0 lg:border-r border-slate-800/80 flex flex-col h-auto lg:h-[calc(100vh-4rem)] shrink-0 select-none">
      {/* Sidebar Tabs */}
      <div className="p-3 border-b border-slate-800/70">
        <div className="grid grid-cols-3 gap-1 bg-slate-950/60 p-1 rounded-xl border border-slate-800/80">
          <button
            onClick={() => setActiveSidebarTab('images')}
            className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition ${
              activeSidebarTab === 'images'
                ? 'bg-slate-800 text-amber-200 border border-amber-500/25 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Slot Foto</span>
          </button>
          <button
            onClick={() => setActiveSidebarTab('texts')}
            className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition ${
              activeSidebarTab === 'texts'
                ? 'bg-slate-800 text-amber-200 border border-amber-500/25 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Type className="w-3.5 h-3.5" />
            <span>Edit Teks</span>
          </button>
          <button
            onClick={() => setActiveSidebarTab('presets')}
            className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition ${
              activeSidebarTab === 'presets'
                ? 'bg-slate-800 text-amber-200 border border-amber-500/25 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Wand2 className="w-3.5 h-3.5" />
            <span>Gaya & Efek</span>
          </button>
        </div>
      </div>

      {/* Sidebar Scrollable Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Fine-Tuning Box */}
        <PhotoAdjustmentBox
          activeTemplate={activeTemplate}
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
          activeAdjustments={activeAdjustments}
          triggerSlotUpload={triggerSlotUpload}
        />

        {/* TAB 1: IMAGE SLOTS */}
        {activeSidebarTab === 'images' && (
          <>
            {activeTemplate === 'template1' ? (
              <Template1ImagesControls
                t1Data={t1Data}
                setT1Data={setT1Data}
                selectedSlot={selectedSlot}
                setSelectedSlot={setSelectedSlot}
                triggerSlotUpload={triggerSlotUpload}
                showToast={showToast}
              />
            ) : activeTemplate === 'template2' ? (
              <Template2ImagesControls
                t2Data={t2Data}
                setT2Data={setT2Data}
                selectedSlot={selectedSlot}
                setSelectedSlot={setSelectedSlot}
                triggerSlotUpload={triggerSlotUpload}
                showToast={showToast}
              />
            ) : activeTemplate === 'template3' ? (
              <Template3ImagesControls
                t3Data={t3Data}
                setT3Data={setT3Data}
                selectedSlot={selectedSlot}
                setSelectedSlot={setSelectedSlot}
                triggerSlotUpload={triggerSlotUpload}
                showToast={showToast}
              />
            ) : activeTemplate === 'template4' ? (
              <Template4ImagesControls
                t4Data={t4Data}
                setT4Data={setT4Data}
                selectedSlot={selectedSlot}
                setSelectedSlot={setSelectedSlot}
                triggerSlotUpload={triggerSlotUpload}
                showToast={showToast}
              />
            ) : (
              <Template5ImagesControls
                t5Data={t5Data}
                setT5Data={setT5Data}
                selectedSlot={selectedSlot}
                setSelectedSlot={setSelectedSlot}
                triggerSlotUpload={triggerSlotUpload}
                showToast={showToast}
              />
            )}
          </>
        )}

        {/* TAB 2: TEXT EDITING */}
        {activeSidebarTab === 'texts' && (
          <div className="space-y-4">
            {activeTemplate === 'template1' ? (
              <Template1TextsControls
                t1Data={t1Data}
                setT1Data={setT1Data}
              />
            ) : activeTemplate === 'template2' ? (
              <Template2TextsControls
                t2Data={t2Data}
                setT2Data={setT2Data}
              />
            ) : activeTemplate === 'template3' ? (
              <Template3TextsControls
                t3Data={t3Data}
                setT3Data={setT3Data}
                showToast={showToast}
              />
            ) : activeTemplate === 'template4' ? (
              <Template4TextsControls
                t4Data={t4Data}
                setT4Data={setT4Data}
              />
            ) : (
              <Template5TextsControls
                t5Data={t5Data}
                setT5Data={setT5Data}
              />
            )}
          </div>
        )}

        {/* TAB 3: GAYA & EFEK */}
        {activeSidebarTab === 'presets' && (
          <SidebarPresetsTab
            activeTemplate={activeTemplate}
            colors={getActiveTemplateColors()}
            onChangeColors={handleUpdateActiveTemplateColors}
            onResetColors={handleResetActiveTemplateColors}
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
            posterTheme={posterTheme}
            setPosterTheme={setPosterTheme}
            showParticles={showParticles}
            setShowParticles={setShowParticles}
            triggerSlotUpload={triggerSlotUpload}
            showToast={showToast}
          />
        )}
      </div>
    </aside>
  );
}

