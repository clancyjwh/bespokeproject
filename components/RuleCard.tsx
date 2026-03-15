interface RuleCardProps {
  text: string;
}

export function RuleCard({ text }: RuleCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow">
      <div className="text-sm text-gray-700">{text}</div>
    </div>
  );
}
