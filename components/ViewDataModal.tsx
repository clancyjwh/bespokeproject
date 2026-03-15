import { X } from 'lucide-react';
import { useState } from 'react';
import { TrendSeries } from '../types';

interface ViewDataModalProps {
  series: TrendSeries[];
  onClose: () => void;
}

function getUnitForSeries(seriesName: string): string {
  if (seriesName.includes('12M Return') || seriesName.includes('Period Return') ||
      seriesName.includes('MTD') || seriesName.includes('1Y')) {
    return '%';
  }
  if (seriesName.includes('% of Total') || seriesName.includes('Cash %') ||
      seriesName.includes('Equity %')) {
    return '%';
  }
  if (seriesName.includes('($)') || seriesName.toLowerCase().includes('portfolio')) {
    return '$';
  }
  if (seriesName.includes('NAV/Unit')) {
    return ' CAD/unit';
  }
  return '';
}

function formatValueWithUnit(value: number | string, unit: string): string {
  if (value === 'missing') {
    return 'Missing';
  }

  if (typeof value === 'number') {
    const formatted = value.toFixed(2);
    if (unit === '$') {
      return `$${formatted}`;
    }
    return formatted + unit;
  }

  return String(value);
}

export function ViewDataModal({ series, onClose }: ViewDataModalProps) {
  const [selectedSeries, setSelectedSeries] = useState(series[0]?.name || '');

  const currentSeries = series.find((s) => s.name === selectedSeries) || series[0];
  const unit = getUnitForSeries(currentSeries.name);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">View Checkpoint Data</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {series.length > 1 && (
          <div className="border-b border-gray-200 px-6 pt-4">
            <div className="flex gap-2 flex-wrap">
              {series.map((s) => (
                <button
                  key={s.name}
                  onClick={() => setSelectedSeries(s.name)}
                  className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors ${
                    selectedSeries === s.name
                      ? 'bg-white text-blue-600 border-t border-x border-gray-200'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="p-6 overflow-y-auto max-h-[calc(80vh-160px)]">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentSeries.data.map((dataPoint, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {dataPoint.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatValueWithUnit(dataPoint.value, unit)}
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
