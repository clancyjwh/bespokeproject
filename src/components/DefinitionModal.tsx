import { X } from 'lucide-react';
import { useEffect } from 'react';

interface DefinitionModalProps {
  term: string;
  definition: string;
  onClose: () => void;
}

export function DefinitionModal({ term, definition, onClose }: DefinitionModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center z-[200] p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="glass-card rounded-3xl border border-white/10 max-w-lg w-full p-10 shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="absolute -right-16 -top-16 w-32 h-32 bg-cyan-500/10 blur-[40px] rounded-full"></div>
        
        <div className="flex items-start justify-between mb-8 relative z-10">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.4em] mb-2">Glossary Vector</span>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight">{term}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/5 text-slate-400 hover:text-white"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="relative z-10">
          <p className="text-slate-300 text-lg leading-relaxed font-medium">
            {definition}
          </p>
          
          <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest text-balance">Authenticated system definition verified by core engine</span>
          </div>
        </div>
      </div>
    </div>
  );
}
