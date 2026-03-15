interface ScoreSliderProps {
  score: number;
  min?: number;
  max?: number;
}

export function ScoreSlider({ score, min = -10, max = 10 }: ScoreSliderProps) {
  const range = max - min;
  const position = ((score - min) / range) * 100;

  const getColorForScore = (s: number): string => {
    if (s <= -5) return '#f43f5e'; // rose-500
    if (s <= -2) return '#fb923c'; // orange-400
    if (s < 0) return '#fbbf24'; // amber-400
    if (s === 0) return '#94a3b8'; // slate-400
    if (s <= 2) return '#a3e635'; // lime-400
    if (s <= 5) return '#10b981'; // emerald-500
    return '#22d3ee'; // cyan-400
  };

  const markerColor = getColorForScore(score);

  const tickMarks = [];
  for (let i = min; i <= max; i += 2) {
    const tickPosition = ((i - min) / range) * 100;
    tickMarks.push(
      <div
        key={i}
        className="absolute flex flex-col items-center top-4"
        style={{ left: `${tickPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="w-px h-1 bg-slate-800" />
        <span className="text-[10px] font-black text-slate-600 mt-2 tracking-tighter">{i}</span>
      </div>
    );
  }

  return (
    <div className="w-full pt-12 pb-6">
      <div className="relative h-1.5 bg-slate-900 rounded-full border border-white/5">
        {/* Track Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 via-slate-500/10 to-emerald-500/20 rounded-full blur-[1px]"></div>
        
        {tickMarks}

        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-700 ease-out z-10"
          style={{ left: `${position}%` }}
        >
          {/* Indicator Pulse */}
          <div 
            className="absolute inset-[-8px] rounded-full blur-md opacity-50 animate-pulse"
            style={{ backgroundColor: markerColor }}
          ></div>
          
          <div
            className="w-5 h-5 rounded-full border-2 border-slate-950 shadow-[0_0_15px_rgba(0,0,0,0.5)] relative z-10 group cursor-default"
            style={{ backgroundColor: markerColor }}
          >
            {/* Tooltip */}
            <div
              className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg border border-white/10 shadow-2xl backdrop-blur-md z-20 flex flex-col items-center"
              style={{ backgroundColor: `${markerColor}33` }}
            >
              <span className="text-[10px] font-black text-white whitespace-nowrap tracking-tighter">
                {score > 0 ? '+' : ''}{score}
              </span>
              <div 
                className="w-1.5 h-1.5 rotate-45 absolute -bottom-1 border-r border-b border-white/10"
                style={{ backgroundColor: `${markerColor}33` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
