import { ChevronRight } from 'lucide-react';
import { ScoreCalculation } from '../data/scoreCalculations';
import { getScoreColor } from '../utils/colorUtils';

interface ScoreCalculationCardProps {
  calculation: ScoreCalculation;
  onClick: () => void;
}

export function ScoreCalculationCard({ calculation, onClick }: ScoreCalculationCardProps) {
  const scoreColor = getScoreColor(calculation.finalScore);

  return (
    <button
      onClick={onClick}
      className="w-full glass-card rounded-3xl border-white/5 p-8 hover:neon-border-cyan transition-all text-left group overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-2xl -mr-12 -mt-12 group-hover:bg-cyan-500/10 transition-colors"></div>
      
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className="flex flex-col">
          <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.4em] mb-1">Matrix Processor</span>
          <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-cyan-400 transition-colors leading-tight">
            {calculation.title}
          </h3>
        </div>
        <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl border border-white/5 group-hover:bg-white/10 transition-all">
          <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
        </div>
      </div>

      <div className="flex items-center gap-4 relative z-10">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Output Vector</span>
          <div
            className="px-4 py-2 rounded-xl shadow-lg border-2 flex items-center justify-center min-w-[3.5rem]"
            style={{ 
              backgroundColor: `${scoreColor}15`,
              borderColor: `${scoreColor}33`
            }}
          >
            <span className="text-2xl font-black" style={{ color: scoreColor }}>
              {calculation.finalScore > 0 ? '+' : ''}{calculation.finalScore}
            </span>
          </div>
        </div>
        
        <div className="h-12 w-px bg-white/5 mx-2"></div>
        
        <div className="flex-1 flex flex-col gap-1">
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Status</span>
          <span className="text-[10px] font-black text-slate-300 bg-white/5 px-2 py-1 rounded border border-white/5 text-center">
            PROCESSED
          </span>
        </div>
      </div>
    </button>
  );
}
