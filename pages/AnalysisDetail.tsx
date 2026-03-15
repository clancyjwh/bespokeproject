import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { analyses } from '../data/analyses';
import { getScoreColor } from '../utils/colorUtils';
import { SectionCard } from '../components/SectionCard';

export function AnalysisDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const analysis = analyses.find((a) => a.id === id);

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

  const color = getScoreColor(analysis.score);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Report</span>
          </button>
          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-gray-900">{analysis.title}</h1>
            <div className="flex items-center gap-3">
              <span
                className="inline-flex px-5 py-2 rounded-full text-2xl font-bold text-white"
                style={{ backgroundColor: color }}
              >
                {analysis.score > 0 ? '+' : ''}
                {analysis.score}
              </span>
              {analysis.statusLabel && (
                <span className="text-sm font-medium text-gray-600 px-3 py-1 bg-gray-100 rounded-full">
                  {analysis.statusLabel}
                </span>
              )}
            </div>
            <p className="text-gray-700 max-w-4xl leading-relaxed">{analysis.definition}</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {analysis.summaryPoints && analysis.summaryPoints.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Summary</h2>
            <ul className="space-y-3">
              {analysis.summaryPoints.map((point, idx) => (
                <li key={idx} className="text-sm text-gray-700 flex items-start gap-3">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span className="flex-1">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {analysis.keyMetrics && analysis.keyMetrics.length > 0 && (
            <SectionCard
              title="Key Metrics"
              description="Primary data points and measurements"
              count={analysis.keyMetrics.length}
              analysisId={analysis.id}
              sectionType="metrics"
            />
          )}

          {analysis.subComponentScores && analysis.subComponentScores.length > 0 && (
            <SectionCard
              title="Score Breakdown"
              description="Weighted scoring breakdown"
              count={analysis.subComponentScores.length}
              analysisId={analysis.id}
              sectionType="scores"
            />
          )}

          {analysis.supportingSignals && analysis.supportingSignals.length > 0 && (
            <SectionCard
              title="Supporting Signals"
              description="Additional insights and context"
              count={analysis.supportingSignals.length}
              analysisId={analysis.id}
              sectionType="signals"
            />
          )}

          {analysis.scoringLogic && analysis.scoringLogic.length > 0 && (
            <SectionCard
              title="Scoring Logic"
              description="Rules and methodology"
              count={analysis.scoringLogic.length}
              analysisId={analysis.id}
              sectionType="logic"
            />
          )}
        </div>

        {analysis.datasetNotes && analysis.datasetNotes.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Data Integrity</h3>
            <ul className="space-y-2">
              {analysis.datasetNotes.map((note, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <footer className="text-center py-6 text-xs text-gray-500 border-t border-gray-200 mt-8">
          <p className="flex items-center justify-center gap-2">
            <AlertCircle className="w-4 h-4" />
            <span>
              Data limitations: Based on statement checkpoints; not a forecast; not investment
              advice.
            </span>
          </p>
        </footer>
      </main>
    </div>
  );
}
