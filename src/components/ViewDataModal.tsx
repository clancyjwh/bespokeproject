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
      className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center z-[200] p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="glass-card rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden border-white/5 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 bg-cyan-500/5 pointer-events-none"></div>
        
        <div className="flex items-center justify-between p-8 border-b border-white/5 relative z-10">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.4em] mb-1">Data Stream</span>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight">Checkpoint Matrix</h3>
          </div>
          <button
            onClick={onClose}
            className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-2xl transition-all border border-white/5 text-slate-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {series.length > 1 && (
          <div className="border-b border-white/5 px-8 pt-4 bg-white/[0.02] relative z-10">
            <div className="flex gap-4 flex-wrap">
              {series.map((s) => (
                <button
                  key={s.name}
                  onClick={() => setSelectedSeries(s.name)}
                  className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest rounded-t-xl transition-all border-t border-x ${
                    selectedSeries === s.name
                      ? 'bg-slate-900 text-cyan-500 border-white/10 shadow-[0_-10px_20px_-10px_rgba(6,182,212,0.2)]'
                      : 'bg-transparent text-slate-500 border-transparent hover:text-slate-300'
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="p-8 overflow-y-auto max-h-[calc(85vh-180px)] relative z-10 custom-scrollbar">
          <div className="overflow-x-auto rounded-2xl border border-white/5 overflow-hidden">
            <table className="min-w-full">
              <thead>
                <tr className="bg-white/5 border-b border-white/5">
                  <th className="px-8 py-4 text-left text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                    Temporal Marker
                  </th>
                  <th className="px-8 py-4 text-right text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                    Vector Value
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {currentSeries.data.map((dataPoint, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-8 py-5 whitespace-nowrap text-sm font-black text-slate-300 uppercase tracking-wider">
                      {dataPoint.date}
                    </td>
                    <td className="px-8 py-5 whitespace-nowrap text-right text-sm font-black text-white group-hover:text-cyan-400 transition-colors">
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
