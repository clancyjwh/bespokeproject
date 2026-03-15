import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { trends } from '../data/trends';
import { DefinitionModal } from '../components/DefinitionModal';
import { TextWithInfo } from '../components/TextWithInfo';
import { useState } from 'react';

export function TrendDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedTerm, setSelectedTerm] = useState<{ term: string; definition: string } | null>(
    null
  );

  const trend = trends.find((t) => t.id === id);

  const handleTermClick = (term: string, definition: string) => {
    setSelectedTerm({ term, definition });
  };

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
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Report</span>
          </button>
          <h1 className="text-3xl font-bold text-gray-900">{trend.title}</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Explanation</h2>
          <ul className="space-y-2">
            {trend.explanation.map((item, idx) => (
              <li key={idx} className="text-gray-700 flex items-start gap-3">
                <span className="text-gray-400 flex-shrink-0">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <div
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-gray-300 transition-all cursor-pointer group"
          onClick={() => navigate(`/trend/${trend.id}/evidence`)}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              Evidence Summary
            </h2>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 flex-shrink-0 transition-colors" />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            View {trend.evidenceCards.length} key metrics and data points
          </p>
        </div>

        <div
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-gray-300 transition-all cursor-pointer group"
          onClick={() => navigate(`/trend/${trend.id}/chart`)}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              <TextWithInfo text="Trend (Checkpoints)" onShowDefinition={handleTermClick} />
            </h2>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 flex-shrink-0 transition-colors" />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            View interactive chart and checkpoint data
          </p>
        </div>
      </main>

      {selectedTerm && (
        <DefinitionModal
          term={selectedTerm.term}
          definition={selectedTerm.definition}
          onClose={() => setSelectedTerm(null)}
        />
      )}
    </div>
  );
}
