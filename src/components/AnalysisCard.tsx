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
      className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-all duration-500 cursor-pointer group relative overflow-hidden"
      onClick={() => navigate(`/analysis/${analysis.id}`)}
      style={{ 
        '--hover-border': color 
      } as React.CSSProperties}
    >
      <div 
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{ backgroundImage: `linear-gradient(to right, transparent, ${color}66, transparent)` }}
      ></div>
      <div 
        className="absolute -right-10 -bottom-10 w-40 h-40 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundColor: `${color}1a` }}
      ></div>
      
      <div className="flex flex-col gap-6 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Intelligence Matrix</span>
            <span 
              className="text-[8px] font-black uppercase tracking-widest opacity-60"
              style={{ color: `${color}` }}
            >
              Node ID {analysis.id}
            </span>
          </div>
          <div 
            className="px-4 py-2 rounded-xl text-lg font-black text-white flex items-center gap-2 group-hover:scale-110 transition-transform duration-500"
            style={{ 
              backgroundColor: `${color}33`, 
              border: `1px solid ${color}66`,
              boxShadow: `0 0 20px ${color}1a`
            }}
          >
            <span className="w-2 h-2 rounded-full bg-white/80 animate-pulse"></span>
            <span style={{ color: color }}>{analysis.score > 0 ? '+' : ''}{analysis.score}</span>
          </div>
        </div>
        
        <div className="flex items-end justify-between gap-6">
          <h3 className="text-xl font-black text-white uppercase tracking-tight leading-none transition-colors duration-500 group-hover:text-white">
            {analysis.title}
          </h3>
          <div 
            className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 transition-all duration-500 group-hover:rotate-45"
            style={{ 
              backgroundColor: undefined, // base style
              borderColor: undefined     // base style
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = `${color}33`;
              (e.currentTarget as HTMLElement).style.borderColor = `${color}4d`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '';
              (e.currentTarget as HTMLElement).style.borderColor = '';
            }}
          >
            <ArrowRight className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors -rotate-45" />
          </div>
        </div>
      </div>
    </div>
  );
}
