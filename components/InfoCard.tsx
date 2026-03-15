interface InfoCardProps {
  title: string;
  value: string;
}

export function InfoCard({ title, value }: InfoCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-sm transition-shadow">
      <div className="text-xs font-medium text-gray-500 mb-1">{title}</div>
      <div className="text-sm font-medium text-gray-900">{value}</div>
    </div>
  );
}
