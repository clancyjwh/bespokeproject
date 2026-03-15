import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Analysis } from '../types';
import { getScoreColor } from '../utils/colorUtils';

interface AnalysisCardProps {
  analysis: Analysis;
}

export function AnalysisCard({ analysis }: AnalysisCardProps) {
  const navigate = useNavigate();
  const color = getScoreColor(analysis.score);

  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/analysis/${analysis.id}`)}
    >
      <div className="p-4" style={{ backgroundColor: color }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h3 className="text-base font-semibold text-white">{analysis.title}</h3>
            <span className="px-2.5 py-0.5 rounded-full text-sm font-bold bg-white bg-opacity-30 text-white">
              {analysis.score > 0 ? '+' : ''}
              {analysis.score}
            </span>
          </div>
          <ArrowRight className="w-5 h-5 text-white ml-4 flex-shrink-0" />
        </div>
      </div>
    </div>
  );
}
