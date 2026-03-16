import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Info } from 'lucide-react';
import { useState } from 'react';
import { insightTiles, sleeveExtremes, dkShareCheckpoints, timelineMonths, watchItems, keyInsightsDefinitions } from '../data/keyInsights';
import { InsightTileModal } from '../components/InsightTileModal';
import { SleeveExtremesModal } from '../components/SleeveExtremesModal';
import { DKShareModal } from '../components/DKShareModal';
import { KeyInsightsDefinitionModal } from '../components/KeyInsightsDefinitionModal';

export function KeyInsights() {
  const navigate = useNavigate();
  const [selectedTile, setSelectedTile] = useState<string | null>(null);
  const [showExtremesModal, setShowExtremesModal] = useState(false);
  const [showDKShareModal, setShowDKShareModal] = useState(false);
  const [selectedDefinition, setSelectedDefinition] = useState<string | null>(null);

  const selectedTileData = insightTiles.find(tile => tile.id === selectedTile);

  const orangeTheme = '#f78911';

  return (
    <div className="min-h-screen bg-transparent relative pb-20">
      <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/5 sticky top-0 z-[100]">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-slate-500 transition-all group font-black uppercase text-[10px] tracking-widest"
            onMouseEnter={(e) => ((e.currentTarget as any).style.color = orangeTheme)}
            onMouseLeave={(e) => ((e.currentTarget as any).style.color = '')}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Terminal Home</span>
          </button>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div 
                  className="w-2 h-8" 
                  style={{ backgroundColor: orangeTheme, boxShadow: `0 0 15px ${orangeTheme}80` }}
                ></div>
                <h1 className="text-4xl font-black text-white uppercase tracking-tighter">
                  Key <span style={{ color: orangeTheme }}>Insights</span>
                </h1>
              </div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] ml-5">Intelligence Data Layer v2.4</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setSelectedDefinition('checkpoint-data')}
                className="px-4 py-2 bg-slate-800/50 hover:bg-slate-700 text-slate-400 hover:text-white text-[10px] font-black rounded-lg border border-white/5 transition-all uppercase tracking-widest flex items-center gap-2"
                onMouseEnter={(e) => ((e.currentTarget as any).style.borderColor = `${orangeTheme}4d`)}
                onMouseLeave={(e) => ((e.currentTarget as any).style.borderColor = '')}
              >
                <Info className="w-4 h-4" style={{ color: orangeTheme }} />
                Checkpoint Analysis
              </button>
              <div 
                className="px-4 py-2 text-[10px] font-black rounded-lg border uppercase tracking-widest flex items-center gap-2 shadow-lg"
                style={{ backgroundColor: `${orangeTheme}1a`, color: orangeTheme, borderColor: `${orangeTheme}33` }}
              >
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: orangeTheme }}></div>
                Coverage: Jun '24 - Jan '26
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-12 space-y-12 animate-fadeIn">
        {/* Watch Items */}
        <div className="glass-card rounded-2xl p-8 border-white/5 relative overflow-hidden group">
          <div 
            className="absolute top-0 right-0 w-64 h-64 blur-[100px] -mr-32 -mt-32"
            style={{ backgroundColor: `${orangeTheme}0d` }}
          ></div>
          <div className="relative">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: orangeTheme }}></span>
              Watch Items
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {watchItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                  <div className="font-black text-[10px] mt-1" style={{ color: orangeTheme }}>[{String(index + 1).padStart(2, '0')}]</div>
                  <span className="text-sm font-medium text-slate-300 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Insight Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {insightTiles.map((tile) => (
            <div
              key={tile.id}
              className="glass-card rounded-2xl p-8 border-white/5 transition-all relative group overflow-hidden"
              onMouseEnter={(e) => {
                (e.currentTarget as any).style.borderColor = `${orangeTheme}33`;
                (e.currentTarget as any).style.boxShadow = `0 0 20px ${orangeTheme}1a`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as any).style.borderColor = '';
                (e.currentTarget as any).style.boxShadow = '';
              }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-2xl -mr-12 -mt-12 group-hover:bg-cyan-500/10 transition-colors"></div>
              <button
                onClick={() => setSelectedTile(tile.id)}
                className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/5 group/info z-10"
                aria-label={`${tile.title} definition`}
              >
                <Info className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </button>
              <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">
                {tile.title}
              </div>
              <div 
                className="text-3xl font-black text-white tracking-tighter mb-4 transition-colors"
                style={{ color: undefined }}
                onMouseEnter={(e) => (e.currentTarget as any).style.color = orangeTheme}
                onMouseLeave={(e) => (e.currentTarget as any).style.color = ''}
              >
                {tile.value}
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                {tile.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Visuals Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <div className="glass-card rounded-2xl p-8 border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
            <div className="flex items-start justify-between mb-10">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-black text-white uppercase tracking-tight">MTD Prints</h3>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Sleeve Extreme Variance (LW)</span>
              </div>
              <button
                onClick={() => setSelectedDefinition('sleeve-extremes')}
                className="p-2 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/5"
                aria-label="Sleeve extremes definition"
              >
                <Info className="w-4 h-4 text-slate-500 hover:text-cyan-400" />
              </button>
            </div>
            
            <button
              onClick={() => setShowExtremesModal(true)}
              className="w-full text-left bg-slate-900/40 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all group/chart"
            >
              <div className="space-y-6">
                {sleeveExtremes.map((extreme, index) => {
                  const maxAbsValue = Math.max(...sleeveExtremes.map(e => Math.abs(e.value)));
                  const barWidth = (Math.abs(extreme.value) / maxAbsValue) * 100;
                  const isPositive = extreme.value >= 0;
                  const barColor = isPositive ? orangeTheme : '#f43f5e';

                  return (
                    <div key={index} className="relative">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{extreme.name}</span>
                        <div 
                          className="px-2 py-0.5 rounded text-[10px] font-black border"
                          style={{ 
                            backgroundColor: `${barColor}33`, 
                            color: barColor, 
                            borderColor: `${barColor}4d` 
                          }}
                        >
                          {extreme.value > 0 ? '+' : ''}{extreme.value.toFixed(2)}%
                        </div>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{ 
                            width: `${barWidth}%`, 
                            backgroundColor: barColor, 
                            boxShadow: `0 0 10px ${barColor}80` 
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </button>
            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mt-6 italic">
              Checkpoint Data Incomplete Analysis
            </p>
          </div>

          {/* Pie Chart */}
          <div className="glass-card rounded-2xl p-8 border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-amber-500/20 to-transparent"></div>
            <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">Portfolio Share</h3>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-10">Asset Allocation Layer</p>
            
            <button
              onClick={() => setShowDKShareModal(true)}
              className="w-full flex flex-col items-center gap-10 bg-slate-900/40 p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all group/pie"
            >
              <div className="relative">
                {/* SVG Pie Chart with Premium Glows */}
                <div className="absolute inset-0 bg-amber-500/10 blur-[60px] rounded-full scale-75 group-hover/pie:scale-100 transition-transform duration-700"></div>
                <svg viewBox="-5 -5 210 210" className="w-48 h-48 relative z-10 drop-shadow-2xl">
                  {/* Non-DK slice (87.8%) */}
                  <path
                    d="M 100 100 L 100 0 A 100 100 0 1 1 31.6 18.4 Z"
                    fill="url(#gradientNonDK)"
                    stroke="#020617"
                    strokeWidth="4"
                  />
                  {/* DK slice (12.2%) */}
                  <path
                    d="M 100 100 L 31.6 18.4 A 100 100 0 0 1 100 0 Z"
                    fill="url(#gradientDK)"
                    stroke="#020617"
                    strokeWidth="4"
                  />
                  <defs>
                    <linearGradient id="gradientNonDK" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                    <linearGradient id="gradientDK" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#fbbf24" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              <div className="w-full grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1 p-3 bg-blue-500/5 border border-blue-500/10 rounded-xl">
                  <span className="text-[8px] font-black text-blue-400 uppercase tracking-[0.2em]">External Layer</span>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-white">87.8%</span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">NON-DK</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 p-3 bg-amber-500/5 border border-amber-500/10 rounded-xl">
                  <span className="text-[8px] font-black text-amber-400 uppercase tracking-[0.2em]">Core Layer</span>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-white">12.2%</span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">DK CAP</span>
                  </div>
                </div>
              </div>
            </button>
            <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mt-6">Timestamp Ref: 2026-01-31</p>
          </div>
        </div>

        {/* Timeline Chart */}
        <div className="glass-card rounded-2xl p-8 border-white/5 relative overflow-hidden group">
          <div 
            className="absolute inset-0 blur-[120px] rounded-full"
            style={{ backgroundColor: `${orangeTheme}0d` }}
          ></div>
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] mb-10 relative z-10">Data Coverage Timeline</h3>
          <div className="overflow-x-auto pb-4 custom-scrollbar relative z-10">
            <div className="flex items-center gap-6 min-w-max px-4">
              {timelineMonths.map((month, index) => (
                <div key={index} className="flex flex-col items-center gap-4 group/month">
                  <div
                    className="w-4 h-4 rounded-full border-2 transition-all duration-500"
                    style={{ 
                      backgroundColor: month.hasData ? orangeTheme : '#0f172a',
                      borderColor: month.hasData ? orangeTheme : '#334155',
                      boxShadow: month.hasData ? `0 0 15px ${orangeTheme}cc` : 'none',
                      transform: month.hasData ? 'scale(1.1)' : 'scale(1)'
                    }}
                  />
                  <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${month.hasData ? 'text-white' : 'text-slate-600'}`}>
                    {month.month}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Modals */}
      {selectedTileData && (
        <InsightTileModal
          title={selectedTileData.title}
          explanation={selectedTileData.explanation}
          onClose={() => setSelectedTile(null)}
        />
      )}

      {showExtremesModal && (
        <SleeveExtremesModal
          extremes={sleeveExtremes}
          onClose={() => setShowExtremesModal(false)}
        />
      )}

      {showDKShareModal && (
        <DKShareModal
          checkpoints={dkShareCheckpoints}
          onClose={() => setShowDKShareModal(false)}
        />
      )}

      {selectedDefinition && (
        <KeyInsightsDefinitionModal
          term={selectedDefinition === 'checkpoint-data' ? 'Checkpoint data (not monthly)' : selectedDefinition}
          definition={keyInsightsDefinitions[selectedDefinition]}
          onClose={() => setSelectedDefinition(null)}
        />
      )}
    </div>
  );
}
