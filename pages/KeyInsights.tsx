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
            <h1 className="text-4xl font-bold text-gray-900">Key Insights</h1>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setSelectedDefinition('checkpoint-data')}
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200 transition-colors"
              >
                <Info className="w-4 h-4" />
                Checkpoint data (not monthly)
              </button>
              <span className="inline-flex items-center gap-2 text-sm text-amber-700 font-medium bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200">
                Dataset: June 2024 to January 2026 (Incomplete)
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Watch Items */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Watch Items
          </h3>
          <ul className="space-y-3">
            {watchItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Insight Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {insightTiles.map((tile) => (
            <div
              key={tile.id}
              className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all relative group"
            >
              <button
                onClick={() => setSelectedTile(tile.id)}
                className="absolute top-4 right-4 p-1.5 hover:bg-gray-100 rounded-full transition-colors z-10"
                aria-label={`${tile.title} definition`}
              >
                <Info className="w-4 h-4 text-gray-400 hover:text-gray-600" />
              </button>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 pr-8">
                {tile.title}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                {tile.value}
              </div>
              <div className="text-xs text-gray-600">
                {tile.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Visuals Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 relative">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Largest Positive and Negative Sleeve MTD Prints (LW)
              </h3>
              <button
                onClick={() => setSelectedDefinition('sleeve-extremes')}
                className="p-1.5 hover:bg-gray-100 rounded-full transition-colors ml-2 flex-shrink-0"
                aria-label="Sleeve extremes definition"
              >
                <Info className="w-4 h-4 text-gray-400 hover:text-gray-600" />
              </button>
            </div>
            <button
              onClick={() => setShowExtremesModal(true)}
              className="w-full hover:bg-gray-50 transition-colors rounded-lg p-4"
            >
              <div className="space-y-4">
                {sleeveExtremes.map((extreme, index) => {
                  const maxAbsValue = Math.max(...sleeveExtremes.map(e => Math.abs(e.value)));
                  const barWidth = (Math.abs(extreme.value) / maxAbsValue) * 100;
                  const isPositive = extreme.value >= 0;

                  return (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-700">{extreme.name}</span>
                        <span className={`text-sm font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                          {extreme.value > 0 ? '+' : ''}{extreme.value.toFixed(2)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full ${isPositive ? 'bg-green-500' : 'bg-red-500'}`}
                          style={{ width: `${barWidth}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </button>
            <p className="text-xs text-gray-500 mt-4 italic">
              Observed checkpoint extremes in the dataset (not a full monthly history).
            </p>
          </div>

          {/* Pie Chart */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Portfolio Share (Latest Checkpoint)
            </h3>
            <button
              onClick={() => setShowDKShareModal(true)}
              className="w-full hover:bg-gray-50 transition-colors rounded-lg p-4"
            >
              <div className="flex items-center justify-center mb-4">
                <svg viewBox="-5 -5 210 210" className="w-48 h-48">
                  {/* Non-DK slice (87.8%) - starts at top, goes clockwise */}
                  <path
                    d="M 100 100 L 100 0 A 100 100 0 1 1 31.6 18.4 Z"
                    fill="#3b82f6"
                    stroke="white"
                    strokeWidth="2"
                  />
                  {/* DK slice (12.2%) */}
                  <path
                    d="M 100 100 L 31.6 18.4 A 100 100 0 0 1 100 0 Z"
                    fill="#f59e0b"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <span className="text-sm text-gray-700">Non-DK</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">87.8%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-amber-500 rounded"></div>
                    <span className="text-sm text-gray-700">DK</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">12.2%</span>
                </div>
              </div>
            </button>
            <p className="text-xs text-gray-500 mt-4">as of 2026-01-31</p>
          </div>
        </div>

        {/* Timeline Chart */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Data Coverage Timeline
          </h3>
          <div className="overflow-x-auto pb-2">
            <div className="flex items-center gap-3 min-w-max">
              {timelineMonths.map((month, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      month.hasData
                        ? 'bg-blue-500 border-blue-500'
                        : 'bg-white border-gray-300'
                    }`}
                  />
                  <span className="text-xs text-gray-600 whitespace-nowrap">
                    {month.month}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 italic">
            Filled dots indicate checkpoints with data; empty dots show missing months.
          </p>
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
