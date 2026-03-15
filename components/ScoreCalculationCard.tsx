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
      className="w-full bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all text-left group"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700">
          {calculation.title}
        </h3>
        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600 font-medium">Final Score:</span>
        <div
          className="px-4 py-1.5 rounded-lg shadow-sm"
          style={{ backgroundColor: scoreColor }}
        >
          <span className="text-lg font-bold text-white">
            {calculation.finalScore > 0 ? '+' : ''}
            {calculation.finalScore}
          </span>
        </div>
      </div>
    </button>
  );
}
