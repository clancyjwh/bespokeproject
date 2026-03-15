import { X } from 'lucide-react';
import { useEffect } from 'react';

interface DefinitionModalProps {
  term: string;
  definition: string;
  onClose: () => void;
}

export function DefinitionModal({ term, definition, onClose }: DefinitionModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg border border-gray-300 max-w-lg w-full p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-900">{term}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-900 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="text-gray-700 leading-relaxed">{definition}</p>
      </div>
    </div>
  );
}
