import { AlertCircle, ChevronRight, Calculator, Lightbulb, Info, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AnalysisCard } from '../components/AnalysisCard';
import { TrendCard } from '../components/TrendCard';
import { ScoreSlider } from '../components/ScoreSlider';
import { analyses } from '../data/analyses';
import { trends } from '../data/trends';
import { getScoreColor } from '../utils/colorUtils';

export function Overview() {
  const navigate = useNavigate();
  const overallScore = -2;
  const overallColor = getScoreColor(overallScore);
  const [showScoreDefinition, setShowScoreDefinition] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">PSF Trend Report</h1>
          <p className="text-sm text-gray-600 mt-1">PSEFS Snapshot (Statement Checkpoints)</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <section className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 relative">
            <button
              onClick={() => setShowScoreDefinition(true)}
              className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Score definition"
            >
              <Info className="w-5 h-5 text-gray-400 hover:text-gray-600" />
            </button>
            <div className="text-center mb-6">
              <h2 className="text-lg font-medium text-gray-700 mb-4">Overall Portfolio Score</h2>
              <div
                className="inline-flex items-center justify-center px-12 py-8 rounded-2xl shadow-md"
                style={{ backgroundColor: overallColor }}
              >
                <span className="text-5xl font-bold text-white">
                  {overallScore > 0 ? '+' : ''}
                  {overallScore}
                </span>
              </div>
            </div>

            <div className="mt-8 max-w-3xl mx-auto">
              <ScoreSlider score={overallScore} min={-10} max={10} />
            </div>

            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Overall signal:</span> mild concern driven by
                concentration drift; core performance stable.
              </p>
            </div>
          </div>
        </section>

        <section>
          <button
            onClick={() => navigate('/key-insights')}
            className="w-full bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all text-left group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-50 rounded-xl">
                  <Lightbulb className="w-8 h-8 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                    Key Insights
                  </h2>
                </div>
              </div>
              <ChevronRight className="w-8 h-8 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0" />
            </div>
          </button>
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Analysis Breakdown</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {analyses.map((analysis) => (
              <AnalysisCard key={analysis.id} analysis={analysis} />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Trends Detected</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {trends.map((trend) => (
              <TrendCard key={trend.id} trend={trend} />
            ))}
          </div>
        </section>

        <section>
          <button
            onClick={() => navigate('/score-calculations')}
            className="w-full bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all text-left group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Calculator className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    Score Calculations
                  </h2>
                  <p className="text-sm text-gray-600">
                    Exact scoring breakdown and rounding rules used to produce final scores
                  </p>
                </div>
              </div>
              <ChevronRight className="w-8 h-8 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0" />
            </div>
          </button>
        </section>

        <footer className="text-center py-6 text-xs text-gray-500 border-t border-gray-200 space-y-2">
          <p className="flex items-center justify-center gap-2">
            <AlertCircle className="w-4 h-4" />
            <span>
              Data limitations: Based on statement checkpoints; not a forecast; not investment
              advice.
            </span>
          </p>
          <p className="text-gray-400 italic">
            More data needed for future forecasting
          </p>
        </footer>
      </main>

      {showScoreDefinition && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Overall Portfolio Score</h3>
              <button
                onClick={() => setShowScoreDefinition(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-gray-600 font-medium">
                <span>-10</span>
                <ArrowRight className="w-5 h-5" />
                <span>10</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Based on Health vs Policy & Governance: stability, diversification, and alignment.
              </p>
              <p className="text-gray-600 text-sm">
                More information in the "Score Calculations" tab on the main page.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
