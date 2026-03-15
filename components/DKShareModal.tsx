import { X } from 'lucide-react';
import { DKShareCheckpoint } from '../data/keyInsights';

interface DKShareModalProps {
  checkpoints: DKShareCheckpoint[];
  onClose: () => void;
}

export function DKShareModal({ checkpoints, onClose }: DKShareModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
        <div className="border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">DK % of Total - Checkpoint Series</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Date</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-gray-900">DK % of Total</th>
                </tr>
              </thead>
              <tbody>
                {checkpoints.map((checkpoint, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm text-gray-700">{checkpoint.date}</td>
                    <td className="py-3 px-4 text-sm text-right font-medium text-gray-900">
                      {checkpoint.percentage.toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
