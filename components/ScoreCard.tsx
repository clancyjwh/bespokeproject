import { getScoreColor } from '../utils/colorUtils';

interface ScoreCardProps {
  label: string;
  score: number;
  weight?: string;
}

export function ScoreCard({ label, score, weight }: ScoreCardProps) {
  const color = getScoreColor(score);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="text-sm font-medium text-gray-700 mb-2">{label}</div>
      {weight && <div className="text-xs text-gray-500 mb-3">Weight: {weight}</div>}
      <div
        className="inline-flex px-3 py-1.5 rounded-full text-lg font-bold text-white"
        style={{ backgroundColor: color }}
      >
        {score > 0 ? '+' : ''}
        {score}
      </div>
    </div>
  );
}
