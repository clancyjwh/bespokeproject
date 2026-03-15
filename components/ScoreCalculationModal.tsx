import { X } from 'lucide-react';
import { ScoreCalculation } from '../data/scoreCalculations';
import { getScoreColor } from '../utils/colorUtils';

interface ScoreCalculationModalProps {
  calculation: ScoreCalculation;
  onClose: () => void;
}

export function ScoreCalculationModal({ calculation, onClose }: ScoreCalculationModalProps) {
  return (
    <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 z-[200] animate-fadeIn">
      <div className="glass-card shadow-[0_0_100px_rgba(0,0,0,0.5)] max-w-3xl w-full max-h-[90vh] overflow-hidden rounded-[2.5rem] border border-white/10 flex flex-col relative">
        <div className="absolute inset-0 bg-cyan-500/[0.02] pointer-events-none"></div>
        
        <div className="sticky top-0 bg-slate-900/50 backdrop-blur-xl border-b border-white/10 px-10 py-8 flex items-center justify-between z-20">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.4em] mb-2">Algorithm Breakdown</span>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">{calculation.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-14 h-14 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-2xl transition-all border border-white/5 text-slate-400 hover:text-white group"
          >
            <X className="w-7 h-7 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        <div className="p-10 space-y-12 overflow-y-auto custom-scrollbar relative z-10">
          {/* Definition Section */}
          <div className="bg-cyan-500/5 rounded-3xl p-8 border border-cyan-500/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[40px] -mr-16 -mt-16 rounded-full group-hover:bg-cyan-500/20 transition-colors"></div>
            <p className="text-xl text-slate-200 leading-relaxed font-medium italic relative z-10">"{calculation.definition}"</p>
          </div>

          {/* Score Breakdown Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-2 h-8 bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
              <h3 className="text-xl font-black text-white uppercase tracking-widest">Weights & Metrics</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {calculation.components.map((component, index) => {
                const componentColor = getScoreColor(component.score);
                return (
                  <div
                    key={index}
                    className="bg-white/[0.02] hover:bg-white/[0.04] rounded-2xl p-6 border border-white/5 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-black text-white uppercase tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">{component.name}</h4>
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Weighting Factor</span>
                          <span className="text-[10px] font-black text-slate-300 bg-white/5 px-2 py-0.5 rounded border border-white/5">{component.weight}%</span>
                        </div>
                      </div>
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg border-2"
                        style={{ 
                          backgroundColor: `${componentColor}22`,
                          borderColor: `${componentColor}44`
                        }}
                      >
                        <span className="text-2xl font-black" style={{ color: componentColor }}>
                          {component.score > 0 ? '+' : ''}{component.score}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Calculation Section */}
          <div className="glass-card rounded-[2rem] p-8 border border-white/10 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Formula Processor</span>
            </div>
            <div className="font-mono text-xl text-cyan-400 bg-slate-950/50 p-6 rounded-xl border border-white/5 mb-6 shadow-inner tracking-tight">
              {calculation.calculation}
            </div>
            <div className="flex items-center justify-between px-2">
              <span className="text-lg font-black text-slate-400 uppercase tracking-widest">Final Computed Vector:</span>
              <span className="text-3xl font-black text-white px-6 py-2 bg-white/5 rounded-2xl border border-white/10 shadow-glow-cyan">{calculation.result}</span>
            </div>
          </div>

          {/* Scoring Logic Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-black text-white uppercase tracking-widest">Processor Rules</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {calculation.scoringLogic.map((rule, index) => (
                <div key={index} className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/5 group hover:border-cyan-500/30 transition-all">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform"></div>
                  <span className="text-sm font-bold text-slate-400 group-hover:text-slate-200 transition-colors uppercase tracking-tight">{rule}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rounding Rule */}
          <div className="bg-amber-500/5 rounded-2xl p-8 border border-amber-500/10 flex items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
              <span className="text-2xl">⚠️</span>
            </div>
            <div className="flex-1">
              <h4 className="font-black text-amber-500 uppercase tracking-widest text-[10px] mb-2">Finalization Protocol</h4>
              <p className="text-sm text-slate-400 font-medium">
                Weighted totals are rounded to the nearest integer to finalize the terminal –10 to
                +10 intensity scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
