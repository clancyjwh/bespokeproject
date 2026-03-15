import { X } from 'lucide-react';
import { DKShareCheckpoint } from '../data/keyInsights';

interface DKShareModalProps {
  checkpoints: DKShareCheckpoint[];
  onClose: () => void;
}

export function DKShareModal({ checkpoints, onClose }: DKShareModalProps) {
  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center z-[200] p-6 animate-fadeIn" onClick={onClose}>
      <div 
        className="glass-card rounded-3xl max-w-2xl w-full border-white/5 shadow-[0_0_100px_rgba(245,158,11,0.1)] relative overflow-hidden" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
        
        <div className="p-8 flex items-center justify-between border-b border-white/5">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.4em] mb-1">Time-Series Vector</span>
            <h2 className="text-xl font-black text-white uppercase tracking-tight">DK % of Total Checkpoints</h2>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/5 text-slate-400 hover:text-white group"
          >
            <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        <div className="p-8">
          <div className="bg-slate-900/40 rounded-2xl border border-white/5 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-white/5">
                  <th className="text-left py-4 px-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Temporal Node</th>
                  <th className="text-right py-4 px-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">DK Allocation %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {checkpoints.map((checkpoint, index) => (
                  <tr key={index} className="hover:bg-white/5 transition-colors group">
                    <td className="py-4 px-6 text-sm font-black text-slate-300 uppercase tracking-tighter">
                      {checkpoint.date}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className="text-sm font-black text-amber-400 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">
                        {checkpoint.percentage.toFixed(1)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
