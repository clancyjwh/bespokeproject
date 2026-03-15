import { X } from 'lucide-react';
import { SleeveExtreme } from '../data/keyInsights';

interface SleeveExtremesModalProps {
  extremes: SleeveExtreme[];
  onClose: () => void;
}

export function SleeveExtremesModal({ extremes, onClose }: SleeveExtremesModalProps) {
  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center z-[200] p-6 animate-fadeIn" onClick={onClose}>
      <div 
        className="glass-card rounded-3xl max-w-3xl w-full border-white/5 shadow-[0_0_100px_rgba(34,211,238,0.1)] relative overflow-hidden flex flex-col max-h-[90vh]" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        
        <div className="p-8 flex items-center justify-between border-b border-white/5 bg-slate-900/40 backdrop-blur-md sticky top-0 z-10">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.4em] mb-1">Variance Processor</span>
            <h2 className="text-xl font-black text-white uppercase tracking-tight">Sleeve Extreme Metrics</h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/5 text-slate-400 hover:text-white group"
          >
            <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        <div className="p-8 overflow-y-auto custom-scrollbar">
          <div className="space-y-6">
            {extremes.map((extreme, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 border-white/5 hover:neon-border-cyan transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-2xl -mr-12 -mt-12 group-hover:bg-cyan-500/10 transition-colors"></div>
                
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="flex flex-col gap-1">
                    <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.4em]">Node_{index < 10 ? `0${index}` : index}</span>
                    <h3 className="text-base font-black text-white uppercase tracking-tight leading-tight group-hover:text-cyan-400 transition-colors">
                      {extreme.name}
                    </h3>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`text-xl font-black ${extreme.value >= 0 ? 'text-emerald-400 bg-emerald-500/10' : 'text-rose-400 bg-rose-500/10'} px-3 py-1 rounded-lg border border-white/5 shadow-lg`}>
                      {extreme.value > 0 ? '+' : ''}{extreme.value.toFixed(2)}%
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{extreme.date}</span>
                  </div>
                </div>
                {extreme.definition && (
                  <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5 relative z-10">
                    <p className="text-xs font-medium text-slate-400 leading-relaxed italic">
                      {extreme.definition}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
