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

  const accents: Record<string, string> = {
    metrics: 'cyan',
    scores: 'emerald',
    signals: 'amber',
    logic: 'blue',
  };

  const accentColor = accents[sectionType] || 'emerald';

  return (
    <button
      onClick={() => navigate(`/analysis/${analysisId}/${sectionType}`)}
      className="glass-card rounded-2xl p-8 border-white/5 hover:neon-border-emerald transition-all text-left group relative overflow-hidden"
    >
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${accentColor}-500/20 to-transparent`}></div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-emerald-400 transition-colors">
          {title}
        </h3>
        <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-${accentColor}-500/10 group-hover:border-${accentColor}-500/20 transition-all`}>
          <ChevronRight className={`w-5 h-5 text-slate-500 group-hover:text-white transition-colors`} />
        </div>
      </div>
      <p className="text-sm font-medium text-slate-400 mb-6 leading-relaxed">{description}</p>
      <div className="flex items-center gap-2">
        <span className={`w-1.5 h-1.5 rounded-full bg-${accentColor}-500 shadow-[0_0_10px_rgba(var(--${accentColor}-rgb),0.5)]`}></span>
        <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
          DATA_NODES: {count < 10 ? `0${count}` : count}
        </div>
      </div>
    </button>
  );
}
