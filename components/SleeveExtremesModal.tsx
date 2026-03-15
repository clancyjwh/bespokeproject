import { X } from 'lucide-react';
import { SleeveExtreme } from '../data/keyInsights';

interface SleeveExtremesModalProps {
  extremes: SleeveExtreme[];
  onClose: () => void;
}

export function SleeveExtremesModal({ extremes, onClose }: SleeveExtremesModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="border-b border-gray-200 p-6 flex items-center justify-between sticky top-0 bg-white z-10">
          <h2 className="text-xl font-bold text-gray-900">View Data</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-6">
            {extremes.map((extreme, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-5 hover:border-gray-300 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-semibold text-gray-900">{extreme.name}</h3>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`text-lg font-bold ${extreme.value >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {extreme.value > 0 ? '+' : ''}{extreme.value.toFixed(2)}%
                    </span>
                    <span className="text-xs text-gray-500">{extreme.date}</span>
                  </div>
                </div>
                {extreme.definition && (
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {extreme.definition}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
