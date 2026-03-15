interface InfoCardProps {
  title: string;
  value: string;
}

export function InfoCard({ title, value }: InfoCardProps) {
  return (
    <div className="glass-card rounded-xl p-5 border-white/5 hover:neon-border-emerald transition-all group overflow-hidden relative">
      <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 blur-xl -mr-8 -mt-8 group-hover:bg-emerald-500/10 transition-colors"></div>
      <div className="text-[8px] font-black text-slate-600 uppercase tracking-[0.4em] mb-2">{title}</div>
      <div className="text-sm font-black text-white uppercase tracking-tight">{value}</div>
    </div>
  );
}
