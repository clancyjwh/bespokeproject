import { X } from 'lucide-react';

interface InsightTileModalProps {
  title: string;
  explanation: string;
  onClose: () => void;
}

export function InsightTileModal({ title, explanation, onClose }: InsightTileModalProps) {
  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center z-[200] p-6 animate-fadeIn" onClick={onClose}>
      <div 
        className="glass-card rounded-3xl max-w-lg w-full border-white/5 shadow-[0_0_100px_rgba(16,185,129,0.1)] relative overflow-hidden" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
        
        <div className="p-8">
          <div className="flex items-start justify-between mb-8">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] mb-1">Intelligence node</span>
              <h3 className="text-xl font-black text-white uppercase tracking-tight">Technical Breakdown</h3>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/5 text-slate-400 hover:text-white group"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
            </button>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-900/60 p-5 rounded-2xl border border-white/5">
              <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-2">Subject</p>
              <p className="text-sm font-black text-white uppercase tracking-tight leading-tight">{title}</p>
            </div>
            
            <div className="bg-slate-900/40 p-6 rounded-2xl border border-white/5">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Core Explanation</p>
              <p className="text-slate-300 text-sm font-medium leading-relaxed">{explanation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
