import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SectionCardProps {
  title: string;
  description: string;
  count: number;
  analysisId: string;
  sectionType: string;
  statusColor?: string;
}

export function SectionCard({ title, description, count, analysisId, sectionType, statusColor }: SectionCardProps) {
  const navigate = useNavigate();

  const accents: Record<string, string> = {
    metrics: '#06b6d4', // cyan-500
    scores: '#10b981',  // emerald-500
    signals: '#f59e0b', // amber-500
    logic: '#3b82f6',   // blue-500
  };

  const baseAccent = accents[sectionType] || '#10b981';
  const displayColor = statusColor || baseAccent;

  return (
    <button
      onClick={() => navigate(`/analysis/${analysisId}/${sectionType}`)}
      className="glass-card rounded-2xl p-8 border-white/5 transition-all text-left group relative overflow-hidden"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `inset 0 0 20px ${displayColor}1a, 0 0 20px ${displayColor}1a`;
        (e.currentTarget as HTMLElement).style.borderColor = `${displayColor}33`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = '';
        (e.currentTarget as HTMLElement).style.borderColor = '';
      }}
    >
      <div 
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r"
        style={{ backgroundImage: `linear-gradient(to right, transparent, ${displayColor}33, transparent)` }}
      ></div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-white transition-colors">
          {title}
        </h3>
        <div 
          className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 transition-all group-hover:rotate-12"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = `${displayColor}1a`;
            (e.currentTarget as HTMLElement).style.borderColor = `${displayColor}33`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = '';
            (e.currentTarget as HTMLElement).style.borderColor = '';
          }}
        >
          <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
        </div>
      </div>
      <p className="text-sm font-medium text-slate-400 mb-6 leading-relaxed">{description}</p>
      <div className="flex items-center gap-2">
        <span 
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: displayColor, boxShadow: `0 0 10px ${displayColor}80` }}
        ></span>
        <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
          DATA_NODES: {count < 10 ? `0${count}` : count}
        </div>
      </div>
    </button>
  );
}
