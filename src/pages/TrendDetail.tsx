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
    <div className="min-h-screen bg-transparent relative pb-20">
      <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/5 sticky top-0 z-[100]">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-slate-500 hover:text-emerald-400 mb-6 transition-all group font-black uppercase text-[10px] tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Terminal Home</span>
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
            <h1 className="text-3xl font-black text-white uppercase tracking-tight leading-none">
              {trend.title}
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12 space-y-12 animate-fadeIn">
        <section className="glass-card rounded-2xl p-8 border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] -mr-32 -mt-32"></div>
          <h2 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-8">Trend Analysis Definition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {trend.explanation.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 group/item">
                <div className="w-1 h-1 rounded-full bg-cyan-500/50 mt-2 group-hover/item:scale-150 transition-transform"></div>
                <span className="text-sm font-medium text-slate-300 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="glass-card rounded-2xl p-8 border-white/5 hover:neon-border-emerald transition-all cursor-pointer group relative overflow-hidden"
            onClick={() => navigate(`/trend/${trend.id}/evidence`)}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-emerald-400 transition-colors">
                Evidence Summary
              </h2>
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all">
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
              </div>
            </div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Scan {trend.evidenceCards.length} critical intelligence node{trend.evidenceCards.length === 1 ? '' : 's'}
            </p>
          </div>

          <div
            className="glass-card rounded-2xl p-8 border-white/5 hover:neon-border-emerald transition-all cursor-pointer group relative overflow-hidden"
            onClick={() => navigate(`/trend/${trend.id}/chart`)}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-cyan-400 transition-colors">
                <TextWithInfo text="Trend Data Layer" onShowDefinition={handleTermClick} />
              </h2>
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all">
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
              </div>
            </div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Visualizing checkpoint progression metrics
            </p>
          </div>
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
