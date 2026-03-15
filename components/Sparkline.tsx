import { useState } from 'react';
import { TrendSeries } from '../types';

interface SparklineProps {
  series: TrendSeries[];
}

// Generate all months from 2024-06 to 2026-01
function generateAllMonths(): string[] {
  const months: string[] = [];
  const start = new Date('2024-06-01');
  const end = new Date('2026-01-31');

  let current = new Date(start);
  while (current <= end) {
    const year = current.getFullYear();
    const month = String(current.getMonth() + 1).padStart(2, '0');
    months.push(`${year}-${month}-30`);
    current.setMonth(current.getMonth() + 1);
  }

  return months;
}

export function Sparkline({ series }: SparklineProps) {
  const [selectedSeries, setSelectedSeries] = useState(0);
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const currentSeries = series[selectedSeries];
  const allMonths = generateAllMonths();

  const dataMap = new Map<string, number | null>();
  currentSeries.data.forEach((d) => {
    dataMap.set(d.date, typeof d.value === 'number' ? d.value : null);
  });

  const fullData = allMonths.map(month => ({
    date: month,
    value: dataMap.get(month) ?? null,
    isCheckpoint: dataMap.has(month),
  }));

  const numericValues = fullData
    .map(d => d.value)
    .filter((v): v is number => v !== null);

  if (numericValues.length === 0) return null;

  const minValue = Math.min(...numericValues);
  const maxValue = Math.max(...numericValues);
  const range = maxValue - minValue || 1;

  const width = 800;
  const height = 300;
  const padding = 60;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const allPoints = fullData.map((d, i) => {
    const x = padding + (i / (fullData.length - 1 || 1)) * chartWidth;
    const y = d.value !== null
      ? padding + chartHeight - ((d.value - minValue) / range) * chartHeight
      : null;
    return { x, y, ...d };
  });

  const lineSegments: string[] = [];
  let currentSegment: Array<{ x: number; y: number }> = [];

  allPoints.forEach((point, i) => {
    if (point.value !== null && point.y !== null) {
      currentSegment.push({ x: point.x, y: point.y });
      const nextPoint = allPoints[i + 1];
      if (!nextPoint || nextPoint.value === null) {
        if (currentSegment.length > 0) {
          const segmentPath = currentSegment.map((p, idx) =>
            `${idx === 0 ? 'M' : 'L'} ${p.x},${p.y}`
          ).join(' ');
          lineSegments.push(segmentPath);
        }
        currentSegment = [];
      }
    }
  });

  return (
    <div className="glass-card rounded-3xl p-8 border-white/5 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] -mr-32 -mt-32"></div>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.4em]">Temporal Data Layer</span>
          <h3 className="text-xl font-black text-white uppercase tracking-tight">Performance Vector Analysis</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {series.length > 1 && series.map((s, idx) => (
            <button
              key={s.name}
              onClick={() => setSelectedSeries(idx)}
              className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all border ${
                selectedSeries === idx
                  ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                  : 'bg-white/5 text-slate-500 border-white/5 hover:bg-white/10 hover:text-slate-300'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      <div className="relative bg-slate-900/40 rounded-2xl border border-white/5 p-4 mb-8">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
          <defs>
            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0.01" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((tick) => (
            <line
              key={tick}
              x1={padding}
              y1={padding + chartHeight * tick}
              x2={width - padding}
              y2={padding + chartHeight * tick}
              stroke="white"
              strokeOpacity="0.03"
              strokeDasharray="4,4"
            />
          ))}

          {/* X-axis ticks */}
          {allPoints.map((point, i) => (
            <line
              key={`tick-${i}`}
              x1={point.x}
              y1={padding}
              x2={point.x}
              y2={height - padding}
              stroke="white"
              strokeOpacity={point.isCheckpoint ? "0.05" : "0.02"}
            />
          ))}

          {/* Area under the path (if continuous enough) */}
          {lineSegments.map((segment, i) => (
            <path
              key={`area-${i}`}
              d={`${segment} L ${allPoints[allPoints.length-1].x},${height-padding} L ${allPoints[0].x},${height-padding} Z`}
              fill="url(#chartGradient)"
              className="opacity-50"
            />
          ))}

          {/* Main segments */}
          {lineSegments.map((segment, i) => (
            <path
              key={`segment-${i}`}
              d={segment}
              fill="none"
              stroke="rgb(6, 182, 212)"
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#glow)"
              className="drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]"
            />
          ))}

          {/* Checkpoints */}
          {allPoints.map((point, i) => {
            if (point.value === null || point.y === null) return null;
            const isHovered = hoveredPoint === i;

            return (
              <g key={i}>
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={isHovered ? 8 : 4}
                  fill={isHovered ? "rgb(6, 182, 212)" : "rgb(15, 23, 42)"}
                  stroke="rgb(6, 182, 212)"
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredPoint(i)}
                  onMouseLeave={() => setHoveredPoint(null)}
                />
                {isHovered && (
                  <g className="animate-fadeIn">
                    <rect
                      x={point.x - 70}
                      y={point.y - 75}
                      width="140"
                      height="60"
                      fill="rgb(15, 23, 42)"
                      stroke="rgba(6, 182, 212, 0.5)"
                      strokeWidth="1"
                      rx="12"
                    />
                    <text x={point.x} y={point.y - 50} textAnchor="middle" className="fill-slate-500 font-black text-[10px] uppercase tracking-widest">
                      {point.date}
                    </text>
                    <text x={point.x} y={point.y - 30} textAnchor="middle" className="fill-white font-black text-lg tracking-tighter">
                      {point.value.toFixed(2)}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>

        {/* Date Labels */}
        <div className="flex justify-between mt-4 px-10">
          <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{allMonths[0]}</span>
          <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{allMonths[allMonths.length - 1]}</span>
        </div>
      </div>

      {/* Legend / Info Row */}
      <div className="flex flex-wrap items-center justify-center gap-8 mt-6">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Data Checkpoint</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-1 bg-cyan-500/30 rounded-full overflow-hidden">
            <div className="w-full h-full bg-cyan-500 animate-pulse"></div>
          </div>
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Vector Trajectory</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-lg bg-slate-800 border-2 border-slate-700/50 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
          </div>
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Null Index Gap</span>
        </div>
      </div>
    </div>
  );
}
