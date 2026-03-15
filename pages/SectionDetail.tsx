import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Info } from 'lucide-react';
import { useState } from 'react';
import { analyses } from '../data/analyses';
import { MetricCard } from '../components/MetricCard';
import { ScoreCard } from '../components/ScoreCard';
import { InfoCard } from '../components/InfoCard';
import { RuleCard } from '../components/RuleCard';

export function SectionDetail() {
  const { analysisId, sectionType } = useParams<{ analysisId: string; sectionType: string }>();
  const navigate = useNavigate();
  const [selectedDetail, setSelectedDetail] = useState<{ title: string; detail: string } | null>(null);

  const analysis = analyses.find((a) => a.id === analysisId);

  if (!analysis) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Analysis not found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            Return to Overview
          </button>
        </div>
      </div>
    );
  }

  const renderSection = () => {
    switch (sectionType) {
      case 'metrics':
        return (
          <>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Key Metrics</h1>
            <p className="text-gray-600 mb-8">Detailed breakdown of primary data points and measurements</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {analysis.keyMetrics?.map((metric, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 space-y-4 relative">
                  {metric.detail && (
                    <button
                      onClick={() => setSelectedDetail({ title: metric.title, detail: metric.detail! })}
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label="Show details"
                    >
                      <Info className="w-5 h-5" />
                    </button>
                  )}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 pr-8">
                      {metric.title}
                    </h3>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    {metric.subtext && (
                      <div className="text-sm text-gray-600">
                        {metric.subtext}
                      </div>
                    )}
                  </div>
                  {metric.evidence && metric.evidence.length > 0 && (
                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="text-xs font-semibold text-gray-700 mb-2">Evidence</h4>
                      <ul className="space-y-1">
                        {metric.evidence.map((ev, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-gray-400 mt-0.5">•</span>
                            <span>{ev}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        );

      case 'scores':
        return (
          <>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Score Breakdown</h1>
            <p className="text-gray-600 mb-8">Component scores and their weights in the analysis</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {analysis.subComponentScores?.map((component, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="text-sm font-semibold text-gray-900 mb-2">
                    {component.label}
                  </div>
                  {component.weight && (
                    <div className="text-xs text-gray-600 mb-3">Weight: {component.weight}</div>
                  )}
                  <ScoreCard label="" score={component.score} />
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Note:</span> For detailed score calculations including formulas and rounding rules, see the Score Calculations section on the main overview page.
              </p>
            </div>
          </>
        );

      case 'signals':
        return (
          <>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Supporting Signals</h1>
            <p className="text-gray-600 mb-8">Additional insights and contextual information</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {analysis.supportingSignals?.map((signal, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 space-y-4">
                  <div>
                    <h3 className="text-xs font-medium text-gray-500 mb-1">
                      {signal.title}
                    </h3>
                    <div className="text-lg font-medium text-gray-900">
                      {signal.value}
                    </div>
                  </div>
                  {signal.evidence && signal.evidence.length > 0 && (
                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="text-xs font-semibold text-gray-700 mb-2">Evidence</h4>
                      <ul className="space-y-1">
                        {signal.evidence.map((ev, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-gray-400 mt-0.5">•</span>
                            <span>{ev}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        );

      case 'logic':
        return (
          <>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Scoring Logic</h1>
            <p className="text-gray-600 mb-8">Rules and methodology used to determine the analysis score</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {analysis.scoringLogic?.map((rule, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="text-sm text-gray-700">
                    {rule}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Note:</span> For complete scoring calculations including weighted formulas and rounding rules, see the Score Calculations section on the main overview page.
              </p>
            </div>
          </>
        );

      default:
        return <div className="text-gray-600">Section not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => navigate(`/analysis/${analysisId}`)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to {analysis.title}</span>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderSection()}
      </main>

      {selectedDetail && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedDetail(null)}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{selectedDetail.title}</h3>
              <button
                onClick={() => setSelectedDetail(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-gray-700 whitespace-pre-line">{selectedDetail.detail}</div>
          </div>
        </div>
      )}
    </div>
  );
}
