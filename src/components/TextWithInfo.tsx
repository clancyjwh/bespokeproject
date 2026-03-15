import { Info } from 'lucide-react';
import { definitions, findDefinedTerm } from '../data/definitions';

interface TextWithInfoProps {
  text: string;
  onShowDefinition: (term: string, definition: string) => void;
  className?: string;
}

export function TextWithInfo({ text, onShowDefinition, className = '' }: TextWithInfoProps) {
  const definedTerm = findDefinedTerm(text);

  if (!definedTerm) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span>{text}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onShowDefinition(definedTerm.term, definedTerm.definition);
        }}
        className="p-1 px-1.5 bg-white/5 hover:bg-white/10 rounded border border-white/5 text-slate-500 hover:text-cyan-400 transition-all flex-shrink-0 group/info"
        aria-label="Show definition"
      >
        <Info className="w-3 h-3 group-hover:scale-110 transition-transform" />
      </button>
    </span>
  );
}
