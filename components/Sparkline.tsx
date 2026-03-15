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

  // Create a map of dates to values for the current series
  const dataMap = new Map<string, number | null>();
  currentSeries.data.forEach((d) => {
    dataMap.set(d.date, typeof d.value === 'number' ? d.value : null);
  });

  // Build full dataset with all months
  const fullData = allMonths.map(month => ({
    date: month,
    value: dataMap.get(month) ?? null,
    isCheckpoint: dataMap.has(month),
  }));

  // Get values for scaling (only numeric values)
  const numericValues = fullData
    .map(d => d.value)
    .filter((v): v is number => v !== null);

  if (numericValues.length === 0) return null;

  const minValue = Math.min(...numericValues);
  const maxValue = Math.max(...numericValues);
  const range = maxValue - minValue || 1;

  const width = 600;
  const height = 180;
  const padding = 40;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  // Calculate positions for all months
  const allPoints = fullData.map((d, i) => {
    const x = padding + (i / (fullData.length - 1 || 1)) * chartWidth;
    const y = d.value !== null
      ? padding + chartHeight - ((d.value - minValue) / range) * chartHeight
      : null;
    return { x, y, ...d };
  });

  // Create line segments only between consecutive checkpoints
  const lineSegments: string[] = [];
  let currentSegment: Array<{ x: number; y: number }> = [];

  allPoints.forEach((point, i) => {
    if (point.value !== null && point.y !== null) {
      currentSegment.push({ x: point.x, y: point.y });

      // Check if next point is missing or this is the last point
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
    <div className="space-y-4">
      {/* Data Coverage Badge */}
      <div className="flex flex-wrap gap-2 text-xs">
        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200 font-medium">
          Checkpoint series (not monthly)
        </span>
        <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full border border-gray-200">
          Missing months shown as gaps
        </span>
        <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full border border-gray-200">
          Line shown only where consecutive months exist
        </span>
      </div>

      {series.length > 1 && (
        <div className="flex gap-2 flex-wrap">
          {series.map((s, idx) => (
            <button
              key={s.name}
              onClick={() => setSelectedSeries(idx)}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                selectedSeries === idx
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      )}

      <div className="relative">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
          <defs>
            <linearGradient id="sparklineGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {/* Draw x-axis ticks for all months */}
          {allPoints.map((point, i) => (
            <line
              key={`tick-${i}`}
              x1={point.x}
              y1={height - padding}
              x2={point.x}
              y2={height - padding + 3}
              stroke={point.isCheckpoint ? 'rgb(156, 163, 175)' : 'rgb(229, 231, 235)'}
              strokeWidth="1"
            />
          ))}

          {/* Draw line segments */}
          {lineSegments.map((segment, i) => (
            <path
              key={`segment-${i}`}
              d={segment}
              fill="none"
              stroke="rgb(59, 130, 246)"
              strokeWidth="2"
            />
          ))}

          {/* Draw checkpoint markers */}
          {allPoints.map((point, i) => {
            if (point.value === null || point.y === null) return null;

            return (
              <g key={i}>
                <circle
                  cx={point.x}
                  cy={point.y}
                  r={hoveredPoint === i ? 5 : 3}
                  fill="rgb(59, 130, 246)"
                  className="cursor-pointer transition-all"
                  onMouseEnter={() => setHoveredPoint(i)}
                  onMouseLeave={() => setHoveredPoint(null)}
                />
                {hoveredPoint === i && (
                  <g>
                    <rect
                      x={point.x - 60}
                      y={point.y - 50}
                      width="120"
                      height="40"
                      fill="white"
                      stroke="rgb(229, 231, 235)"
                      strokeWidth="1"
                      rx="4"
                    />
                    <text
                      x={point.x}
                      y={point.y - 32}
                      textAnchor="middle"
                      fill="rgb(107, 114, 128)"
                      fontSize="12"
                    >
                      {point.date}
                    </text>
                    <text
                      x={point.x}
                      y={point.y - 16}
                      textAnchor="middle"
                      fill="rgb(17, 24, 39)"
                      fontSize="14"
                      fontWeight="600"
                    >
                      {point.value.toFixed(2)}
                    </text>
                  </g>
                )}
              </g>
            );
          })}

          {/* Invisible hover areas for missing months */}
          {allPoints.map((point, i) => {
            if (point.value !== null) return null;

            return (
              <g key={`missing-${i}`}>
                <rect
                  x={point.x - 10}
                  y={padding}
                  width="20"
                  height={chartHeight}
                  fill="transparent"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredPoint(i)}
                  onMouseLeave={() => setHoveredPoint(null)}
                />
                {hoveredPoint === i && (
                  <g>
                    <rect
                      x={point.x - 80}
                      y={height / 2 - 25}
                      width="160"
                      height="50"
                      fill="white"
                      stroke="rgb(229, 231, 235)"
                      strokeWidth="1"
                      rx="4"
                    />
                    <text
                      x={point.x}
                      y={height / 2 - 8}
                      textAnchor="middle"
                      fill="rgb(107, 114, 128)"
                      fontSize="11"
                    >
                      {point.date}
                    </text>
                    <text
                      x={point.x}
                      y={height / 2 + 8}
                      textAnchor="middle"
                      fill="rgb(156, 163, 175)"
                      fontSize="11"
                      fontStyle="italic"
                    >
                      No checkpoint for this month
                    </text>
                  </g>
                )}
              </g>
            );
          })}

          {/* X-axis labels */}
          <text x={padding} y={height - 5} fill="rgb(107, 114, 128)" fontSize="11">
            {allMonths[0]}
          </text>
          <text
            x={width - padding}
            y={height - 5}
            fill="rgb(107, 114, 128)"
            fontSize="11"
            textAnchor="end"
          >
            {allMonths[allMonths.length - 1]}
          </text>
        </svg>
      </div>

      {/* Legend */}
      <div className="flex gap-4 text-xs text-gray-600 justify-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span>Checkpoint</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-0.5 bg-blue-500"></div>
          <span>Segment (consecutive months)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 border-t border-gray-300 border-dashed"></div>
          <span>Blank months = no data</span>
        </div>
      </div>
    </div>
  );
}
