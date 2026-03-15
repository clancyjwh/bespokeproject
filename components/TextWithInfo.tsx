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
        className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
        aria-label="Show definition"
      >
        <Info className="w-4 h-4" />
      </button>
    </span>
  );
}
