import { Info } from 'lucide-react';
import { useState } from 'react';

interface MetricCardProps {
  title: string | React.ReactNode;
  value: string;
  subtext?: string;
  detail?: string;
}

export function MetricCard({ title, value, subtext, detail }: MetricCardProps) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <div className="glass-card rounded-2xl p-6 border-white/5 hover:neon-border-cyan transition-all relative group overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-2xl -mr-12 -mt-12 group-hover:bg-cyan-500/10 transition-colors"></div>
        {detail && (
          <button
            onClick={() => setShowDetail(true)}
            className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 text-slate-500 hover:text-cyan-400 transition-all group/info"
            aria-label="Show details"
          >
            <Info className="w-4 h-4" />
          </button>
        )}
        <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4 pr-8">{title}</div>
        <div className="text-3xl font-black text-white tracking-tighter mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">{value}</div>
        {subtext && <div className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest bg-cyan-500/5 border border-cyan-500/10 rounded-lg px-2 py-1 inline-block">{subtext}</div>}
      </div>

      {showDetail && detail && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-6 z-[200] animate-fadeIn">
          <div className="glass-card rounded-3xl max-w-2xl w-full p-10 border-white/5 shadow-[0_0_100px_rgba(var(--cyan-rgb),0.1)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <div className="flex items-center justify-between mb-10">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.4em]">Extended Data Layer</span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">{title}</h3>
              </div>
              <button
                onClick={() => setShowDetail(false)}
                className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-2xl transition-all border border-white/5 text-slate-400 hover:text-white group"
              >
                <svg className="w-6 h-6 group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-slate-300 text-base font-medium leading-relaxed bg-slate-900/40 p-6 rounded-2xl border border-white/5 whitespace-pre-line">
              {detail}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
