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
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
        <div className="glass-card rounded-3xl p-12 border-white/5 text-center max-w-md w-full relative overflow-hidden">
          <div className="absolute inset-0 bg-red-500/5 blur-[100px]"></div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6">Chart Error</h2>
          <p className="text-slate-400 mb-8">Visualization matrix for this trend is currently offline or unreachable.</p>
          <button
            onClick={() => navigate('/')}
            className="w-full py-4 bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-widest rounded-2xl border border-white/5 transition-all"
          >
            System Return
          </button>
        </div>
      </div>
    );
  }

  const viewDataSeries = trend.viewDataSeries || trend.sparklineSeries;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      <header className="fixed top-0 left-0 right-0 z-[100] bg-slate-950/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate(`/trend/${trend.id}`)}
              className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-2xl transition-all border border-white/5 text-slate-400 hover:text-white group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.4em] mb-1">Time-Series Vector</span>
              <h1 className="text-2xl font-black text-white uppercase tracking-tight leading-none truncate max-w-[300px] md:max-w-none">
                {trend.title}
              </h1>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Live Visualizer</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 space-y-10">
        <section className="animate-fadeIn">
          <Sparkline series={trend.sparklineSeries} />
        </section>

        <section className="flex justify-center">
          <button
            onClick={() => setShowDataModal(true)}
            className="flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all font-black uppercase tracking-widest text-sm shadow-[0_20px_40px_-15px_rgba(6,182,212,0.5)] group"
          >
            <Database className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Terminal Data Access
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
