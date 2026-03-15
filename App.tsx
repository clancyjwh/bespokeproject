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
  );
}

export default App;
