export interface ScoreComponent {
  name: string;
  weight: number;
  score: number;
}

export interface ScoreCalculation {
  id: string;
  title: string;
  finalScore: number;
  definition: string;
  description: string;
  components: ScoreComponent[];
  calculation: string;
  result: string;
  scoringLogic: string[];
}

export const scoreCalculations: ScoreCalculation[] = [
  {
    id: 'drift',
    title: 'Drift Velocity',
    finalScore: -2,
    definition: 'Measures the speed and direction of the portfolio changes over time.',
    description: 'Weighted scoring breakdown showing how the final analysis score was calculated.',
    components: [
      { name: 'LW Equity Drift', weight: 30, score: 3 },
      { name: 'DK Concentration Drift', weight: 50, score: -5 },
      { name: 'LW Cash Drift', weight: 20, score: -1 },
    ],
    calculation: '(+3 × 0.30) + (-5 × 0.50) + (-1 × 0.20) = -1.8 → -2',
    result: 'Final Drift Velocity Score: -2',
    scoringLogic: [
      'Controlled, self-correcting drift scores positive.',
      'Accelerating concentration scores negative.',
      'The most material concentration dimension is weighted highest.',
      'Minor, explainable allocation shifts are weighted lower.',
    ],
  },
  {
    id: 'benchmark',
    title: 'Return vs Benchmark',
    finalScore: -2,
    definition: "Measures how each manager's performance compares to an appropriate market index.",
    description: 'Weighted scoring breakdown showing how the final analysis score was calculated.',
    components: [
      { name: 'A) Internal Spread (LW vs DK)', weight: 20, score: -2 },
      { name: 'B) LW vs External Benchmarks', weight: 30, score: -4 },
      { name: 'C) DK vs External Benchmarks', weight: 15, score: 6 },
      { name: 'D) Fund-Level Drivers', weight: 10, score: 0 },
      { name: 'E) Portfolio Context (Drift + Concentration)', weight: 25, score: -5 },
    ],
    calculation: '(-2 × 0.20) + (-4 × 0.30) + (+6 × 0.15) + (0 × 0.10) + (-5 × 0.25)\n= -0.4 -1.2 +0.9 +0 -1.25\n= -1.95 → -2',
    result: 'Final Return vs Benchmark Score: -2',
    scoringLogic: [
      'Core manager benchmark lag is penalized.',
      'Satellite outperformance is credited but capped by governance context.',
      'Portfolio concentration and drift can override headline performance.',
      'Attribution-only drivers are weighted lower than performance and governance signals.',
    ],
  },
  {
    id: 'cashflow',
    title: 'Cash Flow Impact',
    finalScore: 0,
    definition: "Measures how much of the portfolio's value comes from money moving in or out versus investment performance.",
    description: 'Weighted scoring breakdown showing how the final analysis score was calculated.',
    components: [
      { name: 'LW Main Flow Attribution', weight: 30, score: 1 },
      { name: 'DK Flow Attribution', weight: 30, score: 3 },
      { name: 'LW Private Sleeve Attribution', weight: 20, score: 0 },
      { name: 'Portfolio-Level Attribution Integrity', weight: 20, score: -2 },
    ],
    calculation: '(+1 × 0.30) + (+3 × 0.30) + (0 × 0.20) + (-2 × 0.20)\n= 0.3 +0.9 +0 -0.4\n= +0.8 → 0',
    result: 'Final Cash Flow Impact Score: 0',
    scoringLogic: [
      'Clean separation of performance vs flows scores positive.',
      'Missing or non-comparable portfolio-level series scores negative.',
      'Unknown sections remain neutral rather than assumed.',
      'Partial coverage reduces confidence in a strongly positive score.',
    ],
  },
  {
    id: 'assetclass',
    title: 'Asset Class Relative Performance',
    finalScore: 1,
    definition: 'Measures which types of investments (stocks, bonds, private assets, etc.) are consistently driving returns.',
    description: 'Weighted scoring breakdown showing how the final analysis score was calculated.',
    components: [
      { name: 'Canadian Equity', weight: 25, score: 4 },
      { name: 'Foreign Equity', weight: 20, score: -1 },
      { name: 'Fixed Income', weight: 15, score: 0 },
      { name: 'Private Assets', weight: 15, score: -3 },
      { name: 'DK Resource Sleeve', weight: 25, score: 5 },
    ],
    calculation: '(+4 × 0.25) + (-1 × 0.20) + (0 × 0.15) + (-3 × 0.15) + (+5 × 0.25)\n= 1.0 -0.2 +0 -0.45 +1.25\n= +1.6 → +1',
    result: 'Final Asset Class Relative Performance Score: +1',
    scoringLogic: [
      'Consistent leadership across checkpoints scores positive.',
      'Volatility and negative skew score negative.',
      'Cyclical sleeves can score positive but do not automatically dominate the result.',
      'Missing observations reduce confidence and cap the score.',
    ],
  },
  {
    id: 'trajectory',
    title: 'Manager Return Trajectory',
    finalScore: 2,
    definition: "Measures a manager's performance trend over time.",
    description: 'Weighted scoring breakdown showing how the final analysis score was calculated.',
    components: [
      { name: 'LW Trajectory Stability', weight: 35, score: 1 },
      { name: 'DK Trajectory Strength', weight: 40, score: 7 },
      { name: 'Dependence Risk', weight: 25, score: -3 },
    ],
    calculation: '(+1 × 0.35) + (+7 × 0.40) + (-3 × 0.25)\n= 0.35 +2.8 -0.75\n= +2.4 → +2',
    result: 'Final Manager Return Trajectory Score: +2',
    scoringLogic: [
      'Sustained upward trajectory scores positive.',
      'Stable, non-accelerating trajectory scores slightly positive.',
      'Increasing reliance on a single sleeve reduces the score.',
      'Concentration-dependent momentum is not treated as fully diversified strength.',
    ],
  },
  {
    id: 'consistency',
    title: 'DK Return Consistency',
    finalScore: -2,
    definition: "Measures how steady and repeatable DK account's returns are versus how volatile and cycle-dependent they are.",
    description: 'Weighted scoring breakdown showing how the final analysis score was calculated.',
    components: [
      { name: 'Hit Rate', weight: 30, score: 3 },
      { name: 'Return Variability', weight: 30, score: -4 },
      { name: 'Regime Shift Exposure', weight: 25, score: -3 },
      { name: 'Downside Presence', weight: 15, score: -1 },
    ],
    calculation: '(+3 × 0.30) + (-4 × 0.30) + (-3 × 0.25) + (-1 × 0.15)\n= 0.9 -1.2 -0.75 -0.15\n= -1.2 → -2',
    result: 'Final DK Return Consistency Score: -2',
    scoringLogic: [
      'A high positive-period hit rate scores positive.',
      'Large dispersion in returns scores negative.',
      'Step-change patterns across checkpoints reduce repeatability and score negative.',
      'Presence of negative periods reduces the score, even if recent results are strong.',
    ],
  },
];
