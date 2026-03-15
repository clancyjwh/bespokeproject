import { getScoreColor } from '../utils/colorUtils';

interface ScoreCardProps {
  label: string;
  score: number;
  weight?: string;
}

export function ScoreCard({ label, score, weight }: ScoreCardProps) {
  const color = getScoreColor(score);

  return (
    <div className="glass-card rounded-2xl p-6 border-white/5 hover:neon-border-emerald transition-all group overflow-hidden relative">
      <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 blur-2xl -mr-10 -mt-10 group-hover:bg-emerald-500/10 transition-colors"></div>
      <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4">{label}</div>
      {weight && (
        <div className="flex flex-col mb-4">
          <span className="text-[8px] font-black text-slate-600 uppercase tracking-widest">Logic Weight</span>
          <span className="text-xs font-bold text-emerald-500/70">{weight}</span>
        </div>
      )}
      <div
        className="inline-flex px-4 py-2 rounded-xl text-xl font-black text-white shadow-lg tracking-tighter"
        style={{ 
          backgroundColor: `${color}33`, 
          border: `1px solid ${color}66`,
          boxShadow: `0 0 20px ${color}1a`
        }}
      >
        <span style={{ color: color }}>
          {score > 0 ? '+' : ''}
          {score}
        </span>
      </div>
    </div>
  );
}
