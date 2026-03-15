import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SectionCardProps {
  title: string;
  description: string;
  count: number;
  analysisId: string;
  sectionType: string;
}

export function SectionCard({ title, description, count, analysisId, sectionType }: SectionCardProps) {
  const navigate = useNavigate();

  const bgColors: Record<string, string> = {
    metrics: 'bg-slate-50 hover:bg-slate-100',
    scores: 'bg-gray-50 hover:bg-gray-100',
    signals: 'bg-stone-50 hover:bg-stone-100',
    logic: 'bg-neutral-50 hover:bg-neutral-100',
  };

  const iconColors: Record<string, string> = {
    metrics: 'text-slate-700',
    scores: 'text-gray-700',
    signals: 'text-stone-700',
    logic: 'text-neutral-700',
  };

  return (
    <button
      onClick={() => navigate(`/analysis/${analysisId}/${sectionType}`)}
      className={`w-full border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-gray-400 transition-all text-left group ${bgColors[sectionType] || 'bg-white hover:bg-gray-50'}`}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <ChevronRight className={`w-5 h-5 ${iconColors[sectionType] || 'text-gray-400'} group-hover:text-gray-900 transition-colors`} />
      </div>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <div className="text-xs font-medium text-gray-500">
        {count} {count === 1 ? 'item' : 'items'}
      </div>
    </button>
  );
}
