import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Overview } from './pages/Overview';
import { AnalysisDetail } from './pages/AnalysisDetail';
import { TrendDetail } from './pages/TrendDetail';
import { TrendEvidence } from './pages/TrendEvidence';
import { TrendChart } from './pages/TrendChart';
import { SectionDetail } from './pages/SectionDetail';
import { ScoreCalculations } from './pages/ScoreCalculations';
import { KeyInsights } from './pages/KeyInsights';

function App() {
  return (
    <div className="min-h-screen bg-[#020617] relative selection:bg-emerald-500/30 selection:text-emerald-200 custom-scrollbar overflow-x-hidden">
      {/* Premium Background Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/10 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="relative z-10">
        <Router>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/analysis/:id" element={<AnalysisDetail />} />
            <Route path="/analysis/:analysisId/:sectionType" element={<SectionDetail />} />
            <Route path="/trend/:id" element={<TrendDetail />} />
            <Route path="/trend/:id/evidence" element={<TrendEvidence />} />
            <Route path="/trend/:id/chart" element={<TrendChart />} />
            <Route path="/score-calculations" element={<ScoreCalculations />} />
            <Route path="/key-insights" element={<KeyInsights />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
