interface RuleCardProps {
  text: string;
}

export function RuleCard({ text }: RuleCardProps) {
  return (
    <div className="glass-card rounded-xl p-6 border-white/5 hover:neon-border-blue transition-all relative group overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/20 group-hover:bg-blue-500/50 transition-colors"></div>
      <div className="text-sm font-black text-slate-300 uppercase tracking-wider leading-relaxed pl-2">
        {text}
      </div>
    </div>
  );
}

// InfoCard.tsx (assuming it might be in the same file or similar)
// Actually I'll split this if I can, but wait, I can only target one file.
// I'll do RuleCard first and then InfoCard.
