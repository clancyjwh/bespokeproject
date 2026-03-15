interface ScoreSliderProps {
  score: number;
  min?: number;
  max?: number;
}

export function ScoreSlider({ score, min = -10, max = 10 }: ScoreSliderProps) {
  const range = max - min;
  const position = ((score - min) / range) * 100;

  const getColorForScore = (s: number): string => {
    if (s <= -5) return '#dc2626';
    if (s <= -2) return '#f97316';
    if (s < 0) return '#fbbf24';
    if (s === 0) return '#9ca3af';
    if (s <= 2) return '#a3e635';
    if (s <= 5) return '#4ade80';
    return '#22c55e';
  };

  const markerColor = getColorForScore(score);

  const tickMarks = [];
  for (let i = min; i <= max; i += 2) {
    const tickPosition = ((i - min) / range) * 100;
    tickMarks.push(
      <div
        key={i}
        className="absolute flex flex-col items-center"
        style={{ left: `${tickPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="w-px h-2 bg-gray-400" />
        <span className="text-xs text-gray-500 mt-1">{i}</span>
      </div>
    );
  }

  return (
    <div className="w-full py-6">
      <div className="relative h-2 bg-gradient-to-r from-red-500 via-yellow-400 via-gray-400 to-green-500 rounded-full">
        {tickMarks}

        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-300"
          style={{ left: `${position}%` }}
        >
          <div
            className="w-6 h-6 rounded-full border-4 border-white shadow-lg"
            style={{ backgroundColor: markerColor }}
          />
          <div
            className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded text-xs font-bold text-white whitespace-nowrap"
            style={{ backgroundColor: markerColor }}
          >
            {score > 0 ? '+' : ''}{score}
          </div>
        </div>
      </div>
    </div>
  );
}
