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
            <div className="flex flex-col gap-2 mb-12">
              <h1 className="text-4xl font-black text-white uppercase tracking-tight leading-none">Key Metrics</h1>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-widest pl-1">Detailed breakdown of primary data points and measurements</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {analysis.keyMetrics?.map((metric, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-8 border-white/5 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl -mr-16 -mt-16 group-hover:bg-cyan-500/10 transition-colors"></div>
                  {metric.detail && (
                    <button
                      onClick={() => setSelectedDetail({ title: metric.title, detail: metric.detail! })}
                      className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-xl border border-white/5 text-slate-500 hover:text-cyan-400 transition-all group/info"
                      aria-label="Show details"
                    >
                      <Info className="w-5 h-5" />
                    </button>
                  )}
                  <div className="relative z-10">
                    <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4 pr-12">
                      {metric.title}
                    </h3>
                    <div className="text-4xl font-black text-white tracking-tighter mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      {metric.value}
                    </div>
                    {metric.subtext && (
                      <div className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest bg-cyan-500/5 border border-cyan-500/10 rounded-lg px-3 py-1.5 inline-block">
                        {metric.subtext}
                      </div>
                    )}
                  </div>
                  {metric.evidence && metric.evidence.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-white/5 relative z-10">
                      <h4 className="text-[8px] font-black text-slate-600 uppercase tracking-[0.4em] mb-4">Verification Nodes</h4>
                      <div className="space-y-3">
                        {metric.evidence.map((ev, i) => (
                          <div key={i} className="flex items-center gap-3 text-xs font-medium text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></span>
                            <span>{ev}</span>
                          </div>
                        ))}
                      </div>
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
            <div className="flex flex-col gap-2 mb-12">
              <h1 className="text-4xl font-black text-white uppercase tracking-tight leading-none">Score Breakdown</h1>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-widest pl-1">Component scores and their weights in the analysis</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {analysis.subComponentScores?.map((component, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-8 border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-2xl -mr-12 -mt-12 group-hover:bg-emerald-500/10 transition-colors"></div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-6">
                    {component.label}
                  </div>
                  <div className="flex items-end justify-between gap-4 mb-6">
                    <ScoreCard label="" score={component.score} />
                    {component.weight && (
                      <div className="flex flex-col items-end">
                        <span className="text-[8px] font-black text-slate-600 uppercase tracking-widest">Weight</span>
                        <span className="text-xs font-bold text-emerald-500/70">{component.weight}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 p-6 glass-card rounded-2xl border-emerald-500/10 bg-emerald-500/5">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-3">
                <Info className="w-4 h-4 text-emerald-500" />
                <span>Logic Note: For detailed score calculations involving rounding rules, refer to the <span className="text-emerald-400 underline cursor-pointer" onClick={() => navigate('/score-calculations')}>Calculations Terminal</span>.</span>
              </p>
            </div>
          </>
        );

      case 'signals':
        return (
          <>
            <div className="flex flex-col gap-2 mb-12">
              <h1 className="text-4xl font-black text-white uppercase tracking-tight leading-none">Supporting Signals</h1>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-widest pl-1">Additional insights and contextual information</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {analysis.supportingSignals?.map((signal, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-8 border-white/5 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl -mr-16 -mt-16 group-hover:bg-amber-500/10 transition-colors"></div>
                  <div className="relative z-10">
                    <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4">
                      {signal.title}
                    </h3>
                    <div className="text-2xl font-black text-white tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                      {signal.value}
                    </div>
                  </div>
                  {signal.evidence && signal.evidence.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-white/5 relative z-10">
                      <h4 className="text-[8px] font-black text-slate-600 uppercase tracking-[0.4em] mb-4">Signal Verification</h4>
                      <div className="space-y-3">
                        {signal.evidence.map((ev, i) => (
                          <div key={i} className="flex items-center gap-3 text-xs font-medium text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50"></span>
                            <span>{ev}</span>
                          </div>
                        ))}
                      </div>
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
            <div className="flex flex-col gap-2 mb-12">
              <h1 className="text-4xl font-black text-white uppercase tracking-tight leading-none">Scoring Logic</h1>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-widest pl-1">Rules and methodology used to determine the analysis score</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {analysis.scoringLogic?.map((rule, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-8 border-white/5 relative group overflow-hidden min-h-[160px] flex items-center">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/20 group-hover:bg-blue-500/50 transition-colors"></div>
                  <div className="pl-4">
                    <div className="text-[8px] font-black text-blue-500/50 uppercase tracking-[0.5em] mb-4">Logic_Node_{idx < 10 ? `0${idx}` : idx}</div>
                    <p className="text-sm font-black text-slate-300 uppercase tracking-wider leading-relaxed">
                      {rule}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        );

      default:
        return <div className="text-slate-500 uppercase font-black text-xs tracking-widest">Section not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-transparent relative pb-20">
      <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/5 sticky top-0 z-[100]">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <button
            onClick={() => navigate(`/analysis/${analysisId}`)}
            className="flex items-center gap-2 text-slate-500 hover:text-emerald-400 mb-2 transition-all group font-black uppercase text-[10px] tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Module Intelligence</span>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12 animate-fadeIn">
        {renderSection()}
      </main>

      {selectedDetail && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-6 z-[200] animate-fadeIn">
          <div className="glass-card rounded-3xl max-w-2xl w-full p-10 border-white/5 shadow-[0_0_100px_rgba(var(--cyan-rgb),0.1)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <div className="flex items-center justify-between mb-10">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.4em]">Extended Intelligence</span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">{selectedDetail.title}</h3>
              </div>
              <button
                onClick={() => setSelectedDetail(null)}
                className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-2xl transition-all border border-white/5 text-slate-400 hover:text-white group"
              >
                <svg className="w-6 h-6 group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-slate-300 text-base font-medium leading-relaxed bg-slate-900/40 p-6 rounded-2xl border border-white/5 whitespace-pre-line">
              {selectedDetail.detail}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
