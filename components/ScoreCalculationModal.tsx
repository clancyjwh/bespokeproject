import { X } from 'lucide-react';
import { ScoreCalculation } from '../data/scoreCalculations';
import { getScoreColor } from '../utils/colorUtils';

interface ScoreCalculationModalProps {
  calculation: ScoreCalculation;
  onClose: () => void;
}

export function ScoreCalculationModal({ calculation, onClose }: ScoreCalculationModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">{calculation.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Definition Section */}
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-gray-800 leading-relaxed">{calculation.definition}</p>
          </div>

          {/* Score Breakdown Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Score Breakdown</h3>
            <p className="text-sm text-gray-600 mb-4">{calculation.description}</p>

            <div className="space-y-3">
              {calculation.components.map((component, index) => {
                const componentColor = getScoreColor(component.score);
                return (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-1">{component.name}</h4>
                        <p className="text-sm text-gray-600">Weight: {component.weight}%</p>
                      </div>
                      <div
                        className="px-4 py-2 rounded-lg shadow-sm"
                        style={{ backgroundColor: componentColor }}
                      >
                        <span className="text-lg font-bold text-white">
                          {component.score > 0 ? '+' : ''}
                          {component.score}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Calculation Section */}
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {calculation.title} Score Calculation
            </h3>
            <div className="font-mono text-sm text-gray-800 whitespace-pre-line mb-3">
              {calculation.calculation}
            </div>
            <div className="font-semibold text-gray-900">{calculation.result}</div>
          </div>

          {/* Scoring Logic Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Scoring Logic</h3>
            <ul className="space-y-2">
              {calculation.scoringLogic.map((rule, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="text-gray-400 mt-1 flex-shrink-0">•</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Rounding Rule */}
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
            <h4 className="font-semibold text-gray-900 mb-2">Rounding Rule</h4>
            <p className="text-sm text-gray-700">
              Weighted totals are rounded to the nearest whole number to produce the final –10 to
              +10 score.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
