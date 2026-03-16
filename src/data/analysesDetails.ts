import { Analysis } from '../types';

export const analysesDetails: Partial<Record<string, Omit<Analysis, 'id' | 'title' | 'score' | 'summary' | 'definition' | 'individualAnalyses'>>> = {
  drift: {
    statusLabel: 'Moderate Risk',
    keyMetrics: [
      {
        title: 'Core Account Balance',
        value: '−4.8%',
        subtext: '69.6% → 64.8%',
        detail: 'This shows how much the Core account shifted within the portfolio. It decreased by 4.8 percentage points, staying safe below the 70% limit.',
      },
      {
        title: 'Tactical Concentration',
        value: '+5.37%',
        subtext: '6.8% → 12.2%',
        detail: 'This shows how much more of the total portfolio is now in the Tactical account. It grew by 5.37 percentage points, which is a significant jump.',
      },
      {
        title: 'Core Cash Levels',
        value: '+3.1%',
        subtext: '1.2% → 4.3%',
        detail: 'This shows the change in cash held in the Core account. It went up by 3.1 percentage points, partly due to monthly transactions.',
      },
    ],
    subComponentScores: [
      { label: 'Core Account Balance', score: 3, weight: '30%' },
      { label: 'Tactical Focus Rise', score: -5, weight: '50%' },
      { label: 'Core Cash Stability', score: -1, weight: '20%' },
    ],
    calculation: '(+3 × 0.30) + (–5 × 0.50) + (–1 × 0.20) = –1.8 → –2',
    supportingSignals: [
      { title: 'Safety Limit', value: '70%' },
      { title: 'Balance Behavior', value: 'Improving' },
      { title: 'Main Driver', value: 'Market Growth' },
    ],
    scoringLogic: [
      'Stability is rewarded',
      'Fast shifts are penalized',
      'Concentration is most important',
    ],
    datasetNotes: [
      'Based on monthly averages',
      'Currency: CAD',
    ],
  },
  benchmark: {
    statusLabel: 'Mixed Signal',
    keyMetrics: [
      {
        title: 'Core 1-Year Range',
        value: '8%–11%',
        subtext: 'Steady',
        detail: 'The lowest and highest yearly gains for the Core manager. It stayed between 8% and 11%, which is very steady.',
      },
      {
        title: 'Tactical 1-Year Surge',
        value: '67.8%',
        subtext: 'Fast Growth',
        detail: 'The Tactical account grew by 67.8% over the last year, which is significantly higher than average.',
      },
      {
        title: 'Core vs Market',
        value: '~−15%',
        subtext: 'Trailing',
        detail: 'The difference between the Core manager and the overall market. It trailed the market by about 15 percentage points.',
      },
      {
        title: 'Tactical vs Market',
        value: '+27% to +39%',
        subtext: 'Ahead',
        detail: 'The Tactical manager outperformed the standard market index (XIU) by 27 to 39 percentage points in recent months.',
      },
    ],
    subComponentScores: [
      { label: 'Gap Between Managers', score: -2, weight: '20%' },
      { label: 'Core vs Global Markets', score: -4, weight: '30%' },
      { label: 'Tactical vs Global Markets', score: 6, weight: '15%' },
      { label: 'Internal Growth Drivers', score: 0, weight: '10%' },
      { label: 'Overall Risk Context', score: -5, weight: '25%' },
    ],
    calculation: '(–2 × 0.20) + (–4 × 0.30) + (+6 × 0.15) + (0 × 0.10) + (–5 × 0.25) = –1.95 → –2',
    supportingSignals: [
      { title: 'Core Strategy', value: 'Cautious' },
      { title: 'Tactical Strategy', value: 'High Growth' },
      { title: 'Main Risk', value: 'Concentration' },
    ],
    scoringLogic: [
      'Investment safety is prioritized',
      'Core manager trailing is penalized',
      'Big gains in one area are dampened for safety',
    ],
    datasetNotes: [
      'Market figures are estimated',
      'Limited specific date comparisons',
    ],
  },
  cashflow: {
    statusLabel: 'Neutral',
    keyMetrics: [
      {
        title: 'Core Net Deposits',
        value: '~+$54,000',
        subtext: 'Oct→Nov',
        detail: 'Estimated money added to the Core account. Most of this was actually growth from investments.',
      },
      {
        title: 'Tactical Net Deposits',
        value: 'Zero',
        subtext: 'Across 3 months',
        detail: 'No new money was added or removed from the Tactical account, making performance easy to see.',
      },
      {
        title: 'Private Investments',
        value: 'Unknown',
        subtext: 'Need more data',
        detail: 'We do not yet have enough information to see the cash movement in private assets.',
      },
    ],
    subComponentScores: [
      { label: 'Core Flow Quality', score: 1, weight: '30%' },
      { label: 'Tactical Flow Quality', score: 3, weight: '30%' },
      { label: 'Private Flow Quality', score: 0, weight: '20%' },
      { label: 'Data Quality Check', score: -2, weight: '20%' },
    ],
    calculation: '(+1 × 0.30) + (+3 × 0.30) + (0 × 0.20) + (–2 × 0.20) = +0.8 → 0',
    supportingSignals: [
      { title: 'Data Quality', value: 'High (Sleeve-Level)' },
      { title: 'Portfolio Structure', value: 'Shift in Dec' },
    ],
    scoringLogic: [
      'Clear data is rewarded',
      'Inconsistent data is penalized',
      'Missing info is neutral',
    ],
    datasetNotes: [
      'No full timeline of money moves',
      'Transaction history not fully linked',
    ],
  },
  assetclass: {
    statusLabel: 'Positive Signal',
    keyMetrics: [
      {
        title: 'Canadian Stocks',
        value: 'Positive',
        subtext: 'Steady Winner',
        detail: 'Canadian stocks were positive in every month we checked and often the best performer.',
      },
      {
        title: 'International Stocks',
        value: 'Mixed',
        subtext: 'Volatile',
        detail: 'International stocks had some big winning months but also had some sharp drops.',
      },
      {
        title: 'Bonds',
        value: 'Stable',
        subtext: 'Safety Net',
        detail: 'Bonds were very stable, acting as a cushion but rarely leading the growth.',
      },
      {
        title: 'Tactical Growth Area',
        value: 'Surging',
        subtext: 'Strong Momentum',
        detail: 'This area grew very fast in late 2025, providing the main boost to the portfolio.',
      },
    ],
    subComponentScores: [
      { label: 'Canadian Stock Quality', score: 4, weight: '25%' },
      { label: 'International Stock Quality', score: -1, weight: '20%' },
      { label: 'Bond Quality', score: 0, weight: '15%' },
      { label: 'Private Asset Quality', score: -3, weight: '15%' },
      { label: 'Tactical Growth Area', score: 5, weight: '25%' },
    ],
    calculation: '(+4 × 0.25) + (–1 × 0.20) + (0 × 0.15) + (–3 × 0.15) + (+5 × 0.25) = +1.6 → +1',
    supportingSignals: [
      { title: 'Growth Engine', value: 'Single Area Focus' },
      { title: 'Safety Level', value: 'Mixed' },
      { title: 'Diversification', value: 'Low' },
    ],
    scoringLogic: [
      'Consistent growth is rewarded',
      'Extreme ups and downs are penalized',
      'Over-reliance on one area is capped',
    ],
    datasetNotes: [
      'Based on monthly snapshots',
      'Directional trends only',
    ],
  },
  trajectory: {
    statusLabel: 'Positive Signal',
    keyMetrics: [
      {
        title: 'Core Trend',
        value: 'Steady',
        subtext: 'Stable Growth',
        detail: 'The Core manager is staying within a very safe and steady performance range.',
      },
      {
        title: 'Tactical Trend',
        value: 'Improving',
        subtext: 'Speeding Up',
        detail: 'The Tactical manager has been growing much faster since the start of 2026.',
      },
      {
        title: 'Account Value',
        value: 'Nearly Doubled',
        subtext: 'Over 3 Years',
        detail: 'The Tactical account value has almost doubled over the last three years.',
      },
      {
        title: 'Dependence Level',
        value: 'Increasing',
        subtext: 'Higher Focus',
        detail: 'Because one account is growing so fast, the whole portfolio now depends more on that one area.',
      },
    ],
    subComponentScores: [
      { label: 'Core Stability', score: 1, weight: '35%' },
      { label: 'Tactical Strength', score: 7, weight: '40%' },
      { label: 'Dependency Risk', score: -3, weight: '25%' },
    ],
    calculation: '(+1 × 0.35) + (+7 × 0.40) + (–3 × 0.25) = +2.4 → +2',
    supportingSignals: [
      { title: 'Account Growth', value: 'Accelerating' },
      { title: 'Main Source', value: 'Tactical Manager' },
      { title: 'Concentration', value: 'High' },
    ],
    scoringLogic: [
      'Long-term growth is rewarded',
      'Stability is positive',
      'Too much focus on one area is penalized',
    ],
    datasetNotes: [
      'Based on long-term trends',
      'Requires future confirmation',
    ],
  },
  consistency: {
    statusLabel: 'Moderate Risk',
    keyMetrics: [
      {
        title: 'Success Rate',
        value: '5 out of 7',
        subtext: '71% Positive',
        detail: 'We saw positive returns in 5 out of the 7 months we looked at.',
      },
      {
        title: 'Range of Gains',
        value: '-4.7% to +12.6%',
        subtext: 'Large Swings',
        detail: 'Monthly returns varied a lot, ranging from a 4.7% drop to a 12.6% gain.',
      },
      {
        title: 'Consistency Pattern',
        value: 'Not Smooth',
        subtext: 'Lumpy Returns',
        detail: 'Gains are not smooth over time; they tend to happen in big jumps followed by quiet periods.',
      },
    ],
    subComponentScores: [
      { label: 'Historical Hit Rate', score: 3, weight: '30%' },
      { label: 'Return Swings', score: -4, weight: '30%' },
      { label: 'Market Sensitivity', score: -3, weight: '25%' },
      { label: 'Downside Protection', score: -1, weight: '15%' },
    ],
    calculation: '(+3 × 0.30) + (–4 × 0.30) + (–3 × 0.25) + (–1 × 0.15) = –1.2 → –2',
    supportingSignals: [
      { title: 'Return Type', value: 'Cycle-Dependent' },
      { title: 'Recent Winning Streak', value: 'Strong' },
    ],
    scoringLogic: [
      'Winning streaks are rewarded',
      'High volatility is penalized',
      'Lack of consistency is penalized',
    ],
    datasetNotes: [
      'Small number of months checked',
      'Descriptive only',
    ],
  },
};
