import { ArrowRight, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Trend } from '../types';

interface TrendCardProps {
  trend: Trend;
}

export function TrendCard({ trend }: TrendCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className="glass-card rounded-2xl p-7 hover:neon-border-cyan hover:-translate-y-1 transition-all duration-500 cursor-pointer group relative overflow-hidden"
      onClick={() => navigate(`/trend/${trend.id}`)}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[50px] -mr-16 -mt-16 group-hover:bg-cyan-500/10 transition-colors"></div>
      
      <div className="flex flex-col gap-6 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
              <Activity className="w-4 h-4 text-cyan-500" />
            </div>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Signal Vector</span>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-700 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
        </div>

        <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-cyan-400 transition-colors line-clamp-2 leading-tight">
          {trend.title}
        </h3>

        <div className="flex flex-col gap-3 pt-2">
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-black text-slate-600 uppercase tracking-widest">Vector Intensity</span>
            <span className="text-[8px] font-black text-cyan-500 uppercase tracking-widest">74% Target</span>
          </div>
          <div className="h-1.5 w-full bg-slate-800/50 rounded-full overflow-hidden border border-white/5">
            <div 
              className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 w-2/3 shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:w-[70%] transition-all duration-700"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
