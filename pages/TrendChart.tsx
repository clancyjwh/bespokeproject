import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Database } from 'lucide-react';
import { trends } from '../data/trends';
import { Sparkline } from '../components/Sparkline';
import { ViewDataModal } from '../components/ViewDataModal';
import { DefinitionModal } from '../components/DefinitionModal';
import { TextWithInfo } from '../components/TextWithInfo';
import { useState } from 'react';

export function TrendChart() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [showDataModal, setShowDataModal] = useState(false);
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

  const viewDataSeries = trend.viewDataSeries || trend.sparklineSeries;

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
          <p className="text-sm text-gray-500 mt-2">
            <TextWithInfo text="Trend (Checkpoints)" onShowDefinition={handleTermClick} />
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <Sparkline series={trend.sparklineSeries} />
        </section>

        <section className="flex justify-center">
          <button
            onClick={() => setShowDataModal(true)}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <Database className="w-5 h-5" />
            View checkpoint data
          </button>
        </section>
      </main>

      {showDataModal && (
        <ViewDataModal
          series={viewDataSeries}
          onClose={() => setShowDataModal(false)}
        />
      )}

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
