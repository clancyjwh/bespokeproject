import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { ScoreCalculationCard } from '../components/ScoreCalculationCard';
import { ScoreCalculationModal } from '../components/ScoreCalculationModal';
import { scoreCalculations, ScoreCalculation } from '../data/scoreCalculations';

export function ScoreCalculations() {
  const navigate = useNavigate();
  const [selectedCalculation, setSelectedCalculation] = useState<ScoreCalculation | null>(null);

  return (
    <div className="min-h-screen bg-transparent relative pb-20">
      <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/5 sticky top-0 z-[100]">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-slate-500 hover:text-emerald-400 mb-6 transition-all group font-black uppercase text-[10px] tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Terminal Home</span>
          </button>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-8 bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
              <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Algorithm <span className="text-cyan-400">Library</span></h1>
            </div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] ml-5">
              Terminal core logic & weighted distribution matrices
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12 animate-fadeIn">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {scoreCalculations.map((calculation) => (
            <ScoreCalculationCard
              key={calculation.id}
              calculation={calculation}
              onClick={() => setSelectedCalculation(calculation)}
            />
          ))}
        </div>
      </main>

      {selectedCalculation && (
        <ScoreCalculationModal
          calculation={selectedCalculation}
          onClose={() => setSelectedCalculation(null)}
        />
      )}
    </div>
  );
}
