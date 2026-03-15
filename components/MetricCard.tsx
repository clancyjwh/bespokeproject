import { Info } from 'lucide-react';
import { useState } from 'react';

interface MetricCardProps {
  title: string | React.ReactNode;
  value: string;
  subtext?: string;
  detail?: string;
}

export function MetricCard({ title, value, subtext, detail }: MetricCardProps) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow relative">
        {detail && (
          <button
            onClick={() => setShowDetail(true)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Show details"
          >
            <Info className="w-5 h-5" />
          </button>
        )}
        <div className="text-sm font-medium text-gray-600 mb-2 pr-8">{title}</div>
        <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
        {subtext && <div className="text-sm text-gray-500">{subtext}</div>}
      </div>

      {showDetail && detail && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowDetail(false)}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <button
                onClick={() => setShowDetail(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-gray-700 whitespace-pre-line">{detail}</div>
          </div>
        </div>
      )}
    </>
  );
}
