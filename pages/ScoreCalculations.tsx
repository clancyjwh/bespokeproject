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
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Report</span>
          </button>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-gray-900">Score Calculations</h1>
            <p className="text-gray-600">
              Exact scoring breakdown and rounding rules used to produce final scores.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
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
