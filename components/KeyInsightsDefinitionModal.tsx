import { X } from 'lucide-react';

interface KeyInsightsDefinitionModalProps {
  term: string;
  definition: string;
  onClose: () => void;
}

export function KeyInsightsDefinitionModal({ term, definition, onClose }: KeyInsightsDefinitionModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">{term}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-gray-700 leading-relaxed">{definition}</p>
        </div>
      </div>
    </div>
  );
}
