import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Trend } from '../types';

interface TrendCardProps {
  trend: Trend;
}

export function TrendCard({ trend }: TrendCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-gray-300 transition-all cursor-pointer group"
      onClick={() => navigate(`/trend/${trend.id}`)}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
          {trend.title}
        </h3>
        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 flex-shrink-0 transition-colors" />
      </div>
    </div>
  );
}
