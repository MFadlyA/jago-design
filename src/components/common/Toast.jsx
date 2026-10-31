import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-slate-900 text-amber-200 font-medium px-4 py-3 rounded-2xl border border-amber-400/30 shadow-2xl backdrop-blur-md animate-fade-in">
      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
      <span className="text-xs">{message}</span>
    </div>
  );
}

