import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { trends } from '../data/trends';
import { MetricCard } from '../components/MetricCard';

export function TrendEvidence() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const trend = trends.find((t) => t.id === id);

  if (!trend) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Trend not found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Return to Overview
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate(`/trend/${trend.id}`)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Trend</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-900">{trend.title}</h1>
          <p className="text-sm text-gray-500 mt-2">Evidence Summary</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trend.evidenceCards.map((card, idx) => (
            <MetricCard
              key={idx}
              title={card.title}
              value={card.value}
              subtext={card.subtext}
              detail={card.detail}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
