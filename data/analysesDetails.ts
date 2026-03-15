import { Analysis } from '../types';

export const analysesDetails: Partial<Record<string, Omit<Analysis, 'id' | 'title' | 'score' | 'summary' | 'definition' | 'individualAnalyses'>>> = {
  drift: {
    statusLabel: 'Moderate Risk',
    keyMetrics: [
      {
        title: 'LW Account Equity Drift',
        value: '−4.8pp',
        subtext: '69.6% → 64.8%',
        detail: 'This shows the change in equity allocation as percent of the LW Account sleeve (percentage points). The equity allocation decreased by 4.8 percentage points. Policy ceiling: 70%',
      },
      {
        title: 'DK Account Concentration',
        value: '+5.37pp',
        subtext: '6.8% → 12.2%',
        detail: 'This shows the change in allocation as percent of the total portfolio (percentage points). The DK Account concentration increased by 5.37 percentage points. Drift accelerating',
      },
      {
        title: 'LW Account Cash Drift',
        value: '+3.1pp',
        subtext: '1.2% → 4.3%',
        detail: 'This shows the change in cash allocation as percent of the LW Account sleeve (percentage points). The cash allocation increased by 3.1 percentage points. Partially transaction-driven',
      },
    ],
    subComponentScores: [
      { label: 'LW Account Equity Drift', score: 3, weight: '30%' },
      { label: 'DK Account Concentration Drift', score: -5, weight: '50%' },
      { label: 'LW Account Cash Drift', score: -1, weight: '20%' },
    ],
    calculation: '(+3 × 0.30) + (–5 × 0.50) + (–1 × 0.20) = –1.8 → –2',
    supportingSignals: [
      { title: 'Policy Ceiling', value: '70%' },
      { title: 'Drift Behavior', value: 'Self-Correcting (Equity)' },
      { title: 'Growth Driver', value: 'Price Appreciation' },
    ],
    scoringLogic: [
      'Stability rewarded',
      'Acceleration penalized',
      'Concentration weighted highest',
    ],
    datasetNotes: [
      'Multi-month averages except Nov 2025',
      'CAD only',
      'USD excluded',
    ],
  },
  benchmark: {
    statusLabel: 'Mixed Signal',
    keyMetrics: [
      {
        title: 'LW Account 1Y Range',
        value: '8%–11%',
        subtext: 'Stable',
        detail: 'This shows the lowest and highest trailing one-year return, expressed in percent (%). The range spans from 8% to 11%, indicating stable performance.',
      },
      {
        title: 'DK Account 1Y Surge',
        value: '67.8%',
        subtext: 'Strong outperformance',
        detail: 'This shows the trailing one-year return, expressed in percent (%). The return of 67.8% represents strong outperformance.',
      },
      {
        title: 'LW Account Vs Equity Proxies',
        value: '~−15pp',
        subtext: 'Underperformance',
        detail: 'This shows the performance difference compared to equity benchmarks, expressed in percentage points (pp). LW Account underperformed by approximately 15 percentage points.',
      },
      {
        title: 'DK Account Vs XIU',
        value: '+27pp to +39pp',
        subtext: 'Oct/Nov outperformance',
        detail: 'This shows the performance difference compared to the XIU benchmark, expressed in percentage points (pp). DK Account outperformed by 27 to 39 percentage points in Oct/Nov.',
      },
    ],
    subComponentScores: [
      { label: 'Internal Spread (LW Account Vs DK Account)', score: -2, weight: '20%' },
      { label: 'LW Account Vs External Benchmarks', score: -4, weight: '30%' },
      { label: 'DK Account Vs External Benchmarks', score: 6, weight: '15%' },
      { label: 'Fund-Level Drivers', score: 0, weight: '10%' },
      { label: 'Portfolio Context (Drift + Concentration)', score: -5, weight: '25%' },
    ],
    calculation: '(–2 × 0.20) + (–4 × 0.30) + (+6 × 0.15) + (0 × 0.10) + (–5 × 0.25) = –1.95 → –2',
    supportingSignals: [
      { title: 'LW Account Position', value: 'Defensive' },
      { title: 'DK Account Position', value: 'Strong Growth' },
      { title: 'Concentration Impact', value: 'Offsets Gains' },
    ],
    scoringLogic: [
      'Governance risk weighted highest',
      'Core lag penalized',
      'Satellite outperformance capped',
    ],
    datasetNotes: [
      'Some benchmark figures approximate',
      'Limited matched-date comparisons',
    ],
  },
  cashflow: {
    statusLabel: 'Neutral',
    keyMetrics: [
      {
        title: 'LW Account Main Flow',
        value: '~+$54,000',
        subtext: 'Oct→Nov',
        detail: 'This shows the estimated net cash flow, expressed in Canadian dollars (CAD). Approximately $54,000 flowed in during Oct to Nov. Mostly performance-driven',
      },
      {
        title: 'DK Account Flow',
        value: 'Near-zero',
        subtext: 'Across 3 months',
        detail: 'This shows the net cash flow across a 3-month period. Flow is near-zero, providing clean attribution',
      },
      {
        title: 'LW Account Private',
        value: 'Incomplete',
        subtext: 'Insufficient data',
        detail: 'This indicates insufficient data is available to calculate cash flow for the private assets sleeve',
      },
    ],
    subComponentScores: [
      { label: 'LW Account Main Flow Attribution', score: 1, weight: '30%' },
      { label: 'DK Account Flow Attribution', score: 3, weight: '30%' },
      { label: 'LW Account Private Sleeve Attribution', score: 0, weight: '20%' },
      { label: 'Portfolio-Level Attribution Integrity', score: -2, weight: '20%' },
    ],
    calculation: '(+1 × 0.30) + (+3 × 0.30) + (0 × 0.20) + (–2 × 0.20) = +0.8 → 0',
    supportingSignals: [
      { title: 'Attribution Quality', value: 'Clean (Sleeve-Level)' },
      { title: 'Portfolio-Level', value: 'Structural Change (Dec)' },
    ],
    scoringLogic: [
      'Clean attribution rewarded',
      'Structural inconsistency penalized',
      'Incomplete data neutral',
    ],
    datasetNotes: [
      'No full timeline flow split',
      'No portfolio-level return series',
      'No transaction ledger integration',
    ],
  },
  assetclass: {
    statusLabel: 'Positive Signal',
    keyMetrics: [
      {
        title: 'Canadian Equity',
        value: 'Positive',
        subtext: 'All periods',
        detail: 'Canadian Equity MTD returns were positive across all observed periods. Top performer in 3 out of 5 periods',
      },
      {
        title: 'Foreign Equity',
        value: 'Mixed',
        subtext: 'Major April drawdown',
        detail: 'Foreign Equity MTD returns showed mixed performance with a major drawdown in April',
      },
      {
        title: 'Fixed Income',
        value: 'Stabilizer',
        subtext: 'Rarely leads',
        detail: 'Fixed Income MTD returns provided stability but rarely led performance',
      },
      {
        title: 'DK Account Resource',
        value: 'Strong Surge',
        subtext: 'Late-2025',
        detail: 'DK Account returns surged strongly in late 2025, showing cycle exposure',
      },
    ],
    subComponentScores: [
      { label: 'Canadian Equity', score: 4, weight: '25%' },
      { label: 'Foreign Equity', score: -1, weight: '20%' },
      { label: 'Fixed Income', score: 0, weight: '15%' },
      { label: 'Private Assets', score: -3, weight: '15%' },
      { label: 'DK Account Resource Sleeve', score: 5, weight: '25%' },
    ],
    calculation: '(+4 × 0.25) + (–1 × 0.20) + (0 × 0.15) + (–3 × 0.15) + (+5 × 0.25) = +1.6 → +1',
    supportingSignals: [
      { title: 'LW Account Leadership', value: 'Narrow (Canadian)' },
      { title: 'DK Account Character', value: 'Cycle-Driven' },
      { title: 'Diversification', value: 'Limited Breadth' },
    ],
    scoringLogic: [
      'Consistent leadership rewarded',
      'Instability penalized',
      'Cyclical exposure capped',
    ],
    datasetNotes: [
      'LW Account returns MTD',
      'DK Account return definition differs',
      'Cross-manager directional only',
    ],
  },
  trajectory: {
    statusLabel: 'Positive Signal',
    keyMetrics: [
      {
        title: 'LW Account Trajectory',
        value: 'Tight 1Y Band',
        subtext: 'Stable, no uptrend',
        detail: 'LW Account trailing one-year returns stayed within a tight band across checkpoints, showing stability but no clear uptrend',
      },
      {
        title: 'DK Account 12M Return',
        value: 'Accelerating',
        subtext: 'Into Jan 2026',
        detail: 'DK Account trailing twelve-month return, expressed in percent (%), showed accelerating growth into Jan 2026',
      },
      {
        title: 'DK Account 3Y Return',
        value: 'Material Climb',
        subtext: 'NAV nearly doubled',
        detail: 'DK Account net asset value per unit (CAD/unit) nearly doubled over the 3-year period, showing material appreciation',
      },
      {
        title: 'Dependence Risk',
        value: 'Increasing',
        subtext: 'Weight via appreciation',
        detail: 'Portfolio dependence on DK Account is increasing through market appreciation rather than active allocation decisions',
      },
    ],
    subComponentScores: [
      { label: 'LW Account Trajectory Stability', score: 1, weight: '35%' },
      { label: 'DK Account Trajectory Strength', score: 7, weight: '40%' },
      { label: 'Dependence Risk', score: -3, weight: '25%' },
    ],
    calculation: '(+1 × 0.35) + (+7 × 0.40) + (–3 × 0.25) = +2.4 → +2',
    supportingSignals: [
      { title: 'LW Account Character', value: 'Steady' },
      { title: 'DK Account Momentum', value: 'Strong Acceleration' },
      { title: 'Concentration', value: 'Single-Sleeve Dependence' },
    ],
    scoringLogic: [
      'Sustained acceleration rewarded',
      'Stability modest positive',
      'Concentration penalized',
    ],
    datasetNotes: [
      'Sparse checkpoint dataset',
      'Trend-reading, not statistical proof',
    ],
  },
  consistency: {
    statusLabel: 'Moderate Risk',
    keyMetrics: [
      {
        title: 'Hit Rate',
        value: '5/7',
        subtext: '~71% positive',
        detail: 'This shows the number of positive return periods out of total periods observed. 5 out of 7 periods (approximately 71%) had positive returns',
      },
      {
        title: 'Return Range',
        value: '−4.73% to +12.62%',
        subtext: 'Large dispersion',
        detail: 'This shows the lowest and highest period return, expressed in percent (%). The range spans from −4.73% to +12.62% with a median around 2.44%, indicating large dispersion',
      },
      {
        title: 'Recent Pattern',
        value: 'Late-2025 Acceleration',
        subtext: 'Clear regime shift',
        detail: 'Period returns, expressed in percent (%), showed clear acceleration in late 2025, indicating a regime shift in performance pattern',
      },
      {
        title: 'Downside Presence',
        value: '2 Negative',
        subtext: 'Out of 7 periods',
        detail: 'This shows the count of negative return periods. 2 out of 7 periods had negative returns',
      },
    ],
    subComponentScores: [
      { label: 'Hit Rate', score: 3, weight: '30%' },
      { label: 'Return Variability', score: -4, weight: '30%' },
      { label: 'Regime Shift Exposure', score: -3, weight: '25%' },
      { label: 'Downside Presence', score: -1, weight: '15%' },
    ],
    calculation: '(+3 × 0.30) + (–4 × 0.30) + (–3 × 0.25) + (–1 × 0.15) = –1.2 → –2',
    supportingSignals: [
      { title: 'Return Character', value: 'Not Smooth Compounding' },
      { title: 'Driver Type', value: 'Cycle-Driven' },
      { title: 'Recent Streak', value: 'Strong' },
    ],
    scoringLogic: [
      'Streak rewarded',
      'Variability penalized',
      'Regime shifts penalized',
    ],
    datasetNotes: [
      '7 checkpoints only',
      'Descriptive, not statistically significant',
    ],
  },
};
