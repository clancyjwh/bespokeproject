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
    <div className="min-h-screen bg-transparent relative pb-20">
      <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/5 sticky top-0 z-[100]">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-slate-500 transition-all group font-black uppercase text-[10px] tracking-widest mb-6"
            style={{ color: undefined }}
            onMouseEnter={(e) => ((e.currentTarget as any).style.color = color)}
            onMouseLeave={(e) => ((e.currentTarget as any).style.color = '')}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <div 
                  className="w-1.5 h-8" 
                  style={{ backgroundColor: color, boxShadow: `0 0 15px ${color}80` }}
                ></div>
                <h1 className="text-3xl font-black text-white uppercase tracking-tight leading-none">
                  {analysis.title}
                </h1>
              </div>
              <p className="text-sm font-medium text-slate-400 leading-relaxed pl-5 whitespace-pre-wrap">
                {analysis.definition}
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Category Score</span>
                <div 
                  className="px-6 py-3 rounded-2xl text-4xl font-black shadow-2xl flex items-center gap-3 border backdrop-blur-md"
                  style={{ 
                    backgroundColor: `${color}26`, 
                    borderColor: `${color}4d`, 
                    boxShadow: `0 0 30px ${color}26`,
                    color: color 
                  }}
                >
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: color }}></span>
                  {analysis.score > 0 ? '+' : ''}{analysis.score}
                </div>
              </div>
              {analysis.statusLabel && (
                <div 
                  className="px-4 py-2 bg-slate-800/50 border rounded-xl text-[10px] font-black uppercase tracking-[0.2em]"
                  style={{ color: `${color}cc`, borderColor: `${color}22` }}
                >
                  {analysis.statusLabel}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12 space-y-12 animate-fadeIn">
        {analysis.summaryPoints && analysis.summaryPoints.length > 0 && (
          <div className="glass-card rounded-2xl p-8 border-white/5 relative overflow-hidden group">
            <div 
              className="absolute top-0 right-0 w-64 h-64 blur-[100px] -mr-32 -mt-32"
              style={{ backgroundColor: `${color}0d` }}
            ></div>
            <div className="relative">
              <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }}></span>
                Main Findings
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {analysis.summaryPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-4 group/item">
                    <div 
                      className="w-1 h-1 rounded-full mt-2 group-hover/item:scale-150 transition-transform"
                      style={{ backgroundColor: `${color}80` }}
                    ></div>
                    <span className="text-sm font-medium text-slate-300 leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {analysis.keyMetrics && analysis.keyMetrics.length > 0 && (
            <SectionCard
              title="Key Metrics"
              description="Primary data points and measurements"
              count={analysis.keyMetrics.length}
              analysisId={analysis.id}
              sectionType="metrics"
              statusColor={color}
            />
          )}

          {analysis.subComponentScores && analysis.subComponentScores.length > 0 && (
            <SectionCard
              title="Score Breakdown"
              description="Weighted scoring breakdown"
              count={analysis.subComponentScores.length}
              analysisId={analysis.id}
              sectionType="scores"
              statusColor={color}
            />
          )}

          {analysis.supportingSignals && analysis.supportingSignals.length > 0 && (
            <SectionCard
              title="Supporting Signals"
              description="Additional insights and context"
              count={analysis.supportingSignals.length}
              analysisId={analysis.id}
              sectionType="signals"
              statusColor={color}
            />
          )}

          {analysis.scoringLogic && analysis.scoringLogic.length > 0 && (
            <SectionCard
              title="Scoring Logic"
              description="Rules and methodology"
              count={analysis.scoringLogic.length}
              analysisId={analysis.id}
              sectionType="logic"
              statusColor={color}
            />
          )}
        </div>

        {analysis.datasetNotes && analysis.datasetNotes.length > 0 && (
          <div className="glass-card rounded-2xl p-8 border-white/5 bg-slate-900/20 backdrop-blur-sm">
            <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-6">Data Quality Notes</h3>
            <div className="space-y-4">
              {analysis.datasetNotes.map((note, idx) => (
                <div key={idx} className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <span 
                    className="px-2 py-0.5 border rounded"
                    style={{ 
                      color: `${color}80`, 
                      borderColor: `${color}33`, 
                      backgroundColor: `${color}0d` 
                    }}
                  >
                    LOG_{idx}
                  </span>
                  <span>{note}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <footer className="pt-12 border-t border-white/5 opacity-50">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-4 h-4" style={{ color: `${color}80` }} />
            <span>Encrypted Terminal Data Feed • v2.4a_stable</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
