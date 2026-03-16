import React, { useState } from 'react';
import { AlertCircle, ChevronRight, Calculator, Lightbulb, Info, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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
    <div className="min-h-screen bg-transparent relative pb-20">
      {/* Premium Header */}
      <header className="sticky top-0 z-[100] bg-slate-900/80 backdrop-blur-xl border-b border-white/5 px-8 py-5 flex items-center justify-between shadow-2xl">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-1">
            <div 
              className="px-2 py-0.5 rounded text-[10px] font-black text-slate-950 uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              style={{ backgroundColor: overallColor }}
            >
              Project Summary
            </div>
            <h1 className="text-2xl font-black text-white uppercase tracking-tighter">
              PORTFOLIO <span style={{ color: overallColor }} className="font-bold">HEALTH REPORT</span>
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="w-full h-full bg-gradient-to-r animate-shimmer bg-[length:200%_100%]"
                style={{ 
                  backgroundImage: `linear-gradient(to right, ${overallColor}88, ${overallColor}, ${overallColor}88)` 
                }}
              ></div>
            </div>
            <span 
              className="text-[10px] font-bold uppercase tracking-widest animate-pulse"
              style={{ color: `${overallColor}b3` }}
            >
              Live Analysis Layer Active
            </span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => navigate('/key-insights')}
            className="px-4 py-2 bg-slate-800/50 hover:bg-slate-700 text-slate-400 hover:text-white text-[10px] font-black rounded-lg border border-white/5 transition-all uppercase tracking-widest"
          >
            Insights
          </button>
          <button
            onClick={() => navigate('/score-calculations')}
            className="px-4 py-2 text-[10px] font-black rounded-lg border transition-all uppercase tracking-widest shadow-lg"
            style={{ 
              backgroundColor: `${overallColor}1a`,
              color: overallColor,
              borderColor: `${overallColor}33`,
              boxShadow: `0 10px 15px -3px ${overallColor}0d`
            }}
          >
            Calculations
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-12 animate-fadeIn">
        {/* Hero Score Section */}
        <section className="relative group">
          <div 
            className="absolute inset-0 blur-3xl rounded-3xl transition-colors duration-700"
            style={{ backgroundColor: `${overallColor}1a` }}
          ></div>
          <div 
            className="relative glass-card rounded-3xl p-12 overflow-hidden border"
            style={{ borderColor: `${overallColor}22` }}
          >
            <div className="absolute top-0 right-0 p-8">
              <button
                onClick={() => setShowScoreDefinition(true)}
                className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-all border border-white/5 group/info"
                aria-label="Score definition"
              >
                <Info 
                  className="w-5 h-5 text-slate-400 transition-colors"
                  style={{ color: showScoreDefinition ? overallColor : undefined }}
                />
              </button>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <h2 
                className="text-sm font-black uppercase tracking-[0.3em] mb-8"
                style={{ color: `${overallColor}b3` }}
              >
                Total Health Score
              </h2>
              
              <div className="relative mb-12">
                <div 
                  className="w-48 h-48 rounded-full flex flex-col items-center justify-center relative z-10 bg-slate-900 border-4 transition-colors duration-500"
                  style={{ 
                    borderColor: `${overallColor}66`,
                    boxShadow: `0 0 50px ${overallColor}26`
                  }}
                >
                  <span 
                    className="text-6xl font-black tracking-tighter"
                    style={{ 
                      color: overallColor,
                      filter: `drop-shadow(0 0 15px ${overallColor}80)`
                    }}
                  >
                    {overallScore > 0 ? '+' : ''}
                    {overallScore}
                  </span>
                  <span 
                    className="text-[10px] font-black uppercase tracking-widest mt-1"
                    style={{ color: `${overallColor}80` }}
                  >
                    Certified
                  </span>
                </div>
              </div>

              <div className="w-full max-w-2xl px-8">
                <ScoreSlider score={overallScore} min={-10} max={10} />
              </div>

              <div 
                className="mt-12 flex items-center gap-4 px-6 py-3 border rounded-2xl"
                style={{ 
                  backgroundColor: `${overallColor}11`,
                  borderColor: `${overallColor}22`
                }}
              >
                <div 
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ 
                    backgroundColor: overallColor,
                    boxShadow: `0 0 10px ${overallColor}`
                  }}
                ></div>
                <div className="flex flex-col items-start gap-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider leading-relaxed text-left">
                    <span style={{ color: overallColor }}>Signal:</span> mild concern driven by investment focus; core performance stable.
                  </p>
                  <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest italic banner-text">
                    Note: Names of managers and associated entities have been redacted to ensure privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            onClick={() => navigate('/key-insights')}
            className="glass-card p-8 rounded-2xl border-white/5 transition-all text-left group overflow-hidden relative active:scale-[0.98]"
            style={{ 
              '--hover-border': overallColor
            } as React.CSSProperties}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl -mr-16 -mt-16"></div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center border border-amber-500/20 group-hover:bg-amber-500/20 transition-all">
                  <Lightbulb className="w-7 h-7 text-amber-500" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-amber-400 transition-colors"
                      style={{ color: undefined }}>Key Insights</h2>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">What you need to know</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>
          </button>

          <button
            onClick={() => navigate('/score-calculations')}
            className="glass-card p-8 rounded-2xl border-white/5 transition-all text-left group overflow-hidden relative active:scale-[0.98]"
            style={{ 
              '--hover-border': overallColor
            } as React.CSSProperties}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl -mr-16 -mt-16"></div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-all">
                  <Calculator className="w-7 h-7 text-blue-500" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors">Calculations</h2>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">How we got the score</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>
          </button>
        </div>

        {/* Main Analysis Sections */}
        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em]">Deep Dive Sections</h2>
            <div className="flex-1 h-px bg-slate-800"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {analyses.map((analysis) => (
              <AnalysisCard key={analysis.id} analysis={analysis} />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em]">Trends Detected</h2>
            <div className="flex-1 h-px bg-slate-800"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {trends.map((trend) => (
              <TrendCard key={trend.id} trend={trend} />
            ))}
          </div>
        </section>

        <footer className="pt-20 text-center space-y-6 opacity-50">
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 rounded-xl border border-white/5">
              <AlertCircle className="w-3 h-3" style={{ color: overallColor }} />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Statement Checkpoints Verifying Integrity</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em]">Bespoke Tech Intelligence &copy; 2026</p>
            <div className="w-12 h-0.5 bg-slate-800 rounded-full"></div>
          </div>
        </footer>
      </main>

      {showScoreDefinition && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 z-[200] animate-fadeIn">
          <div 
            className="glass-card rounded-3xl max-w-lg w-full p-8 shadow-2xl relative overflow-hidden"
            style={{ borderColor: `${overallColor}33`, boxShadow: `0 0 100px ${overallColor}1a` }}
          >
            <div 
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r"
              style={{ backgroundImage: `linear-gradient(to right, transparent, ${overallColor}, transparent)` }}
            ></div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex flex-col">
                <h3 className="text-lg font-black text-white uppercase tracking-tight">Portfolio Score</h3>
                <span 
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: overallColor }}
                >
                  Logic & Methodology
                </span>
              </div>
              <button
                onClick={() => setShowScoreDefinition(false)}
                className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/5 text-slate-400 hover:text-white"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-6">
              <div 
                className="flex items-center justify-center gap-6 py-4 rounded-2xl border"
                style={{ backgroundColor: `${overallColor}0a`, borderColor: `${overallColor}1a` }}
              >
                <span className="text-xl font-black text-rose-500">-10</span>
                <ArrowRight className="w-5 h-5 text-slate-700" />
                <span className="text-xl font-black" style={{ color: overallColor }}>+10</span>
              </div>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Aggregated metric based on <span className="text-white">Health vs Policy & Governance</span>: stability, diversification, and alignment.
              </p>
              <button
                onClick={() => {
                  setShowScoreDefinition(false);
                  navigate('/score-calculations');
                }}
                className="w-full py-4 text-white text-[10px] font-black rounded-xl transition-all uppercase tracking-widest shadow-lg"
                style={{ backgroundColor: overallColor, boxShadow: `0 10px 20px -5px ${overallColor}4d` }}
              >
                View Detailed Calculations
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
