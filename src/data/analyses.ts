import { Analysis } from '../types';
import { analysesDetails } from './analysesDetails';

const baseAnalyses: Analysis[] = [
  {
    id: 'drift',
    title: 'Drift Velocity',
    score: -2,
    summary: 'Equity drift improved, but DK account concentration drift increased materially.',
    definition: 'Measures the speed and direction of the portfolio changes over time.',
    summaryPoints: [
      'The core equity allocation has moved back toward a more comfortable range.',
      'Cash levels have increased modestly.',
      'A single concentrated position has grown significantly due to market gains rather than an active decision.',
      'The improving equity balance is constructive.',
      'The rising concentration introduces additional risk, resulting in a slightly negative overall score.',
    ],
    individualAnalyses: [
      {
        title: 'LW account Equity Allocation Drift',
        description: [
          '% of LW account in equities over time',
          'Distance from 70% ceiling',
          'Direction and velocity of movement',
        ],
      },
      {
        title: 'DK account Concentration Drift',
        description: [
          'DK account % of total consolidated portfolio',
          'Absolute change (6.8% → 12.2%)',
          'Rate of acceleration (Nov spike)',
          'Active decision vs passive appreciation',
        ],
      },
      {
        title: 'LW account Cash Allocation Drift',
        description: [
          'Cash % inside LW account',
          'Change over time (1.2% → 4.3%)',
          'Flow-driven vs structural',
        ],
      },
      {
        title: 'Drift Velocity Scoring Model',
        description: [
          'Sub-scores weighted:',
          'LW account Equity (30%)',
          'DK account Concentration (50%)',
          'LW account Cash (20%)',
        ],
      },
    ],
  },
  {
    id: 'benchmark',
    title: 'Return vs Benchmark',
    score: -2,
    summary: 'Core lagged equity proxies where measurable; DK account outperformed but adds cyclicality.',
    definition: "Measures how each manager's performance compares to an appropriate market index.",
    summaryPoints: [
      'The core manager has delivered steady but defensive results.',
      'A secondary manager has produced very strong recent gains.',
      'The strongest performance has come from a concentrated position rather than broad diversification.',
      'The core portfolio has not consistently kept pace with major market benchmarks.',
      'Concentration risk offsets headline gains, leading to a slightly negative overall score.',
    ],
    individualAnalyses: [
      {
        title: 'Internal Comparison (LW account vs DK account)',
        description: [
          'LW account 1Y trajectory across checkpoints',
          'DK account 1Y trajectory across checkpoints',
          'Spread expansion (LW account–DK account performance gap over time)',
        ],
      },
      {
        title: 'External – LW account vs Benchmarks',
        description: [
          'LW account vs XIU (Canada proxy)',
          'LW account vs XEF (International proxy)',
          'LW account vs XBB (Bond proxy)',
          'Blended 65/30/5 benchmark estimate',
        ],
      },
      {
        title: 'External – DK account vs Benchmarks',
        description: [
          'DK account vs XIU (Oct)',
          'DK account vs XIU (Nov)',
        ],
      },
      {
        title: 'Fund-Level Attribution',
        description: [
          'US Equity Non-Taxable drawdown impact',
          'Canadian Equity stability',
          'Bond sleeve behavior',
        ],
      },
      {
        title: 'Portfolio Context Overlay',
        description: [
          'DK account concentration drift interaction',
          'LW account equity/cash drift interaction',
        ],
      },
    ],
  },
  {
    id: 'cashflow',
    title: 'Cash Flow Impact',
    score: 0,
    summary: "Where measurable, flows were near-zero; full-period attribution isn't possible.",
    definition: "Measures how much of the portfolio's value comes from money moving in or out versus investment performance.",
    summaryPoints: [
      'Most observed changes in account values appear to be driven by investment performance rather than new deposits or withdrawals.',
      'Attribution is clearer at the individual sleeve level than at the total portfolio level.',
      'Certain parts of the portfolio lack sufficient data for a full flow analysis.',
      'Overall, there is no strong evidence that cash movements are distorting performance results.',
      'The indicator remains neutral due to dataset limitations.',
    ],
    individualAnalyses: [
      {
        title: 'LW account Main Implied Net Flow',
        description: [
          'Oct → Nov',
          'Nov → Dec',
        ],
      },
      {
        title: 'DK account Implied Net Flow',
        description: [
          'Oct → Nov',
          'Nov → Dec',
          'Dec → Jan',
        ],
      },
      {
        title: 'LW account Private Sleeve Treatment',
        description: [
          'Entry into dataset',
          'Lack of usable return alignment',
        ],
      },
      {
        title: 'Portfolio-Level Attribution Feasibility',
        description: [
          'Composition change effect',
          'Missing portfolio return series',
        ],
      },
    ],
  },
  {
    id: 'assetclass',
    title: 'Asset Class Relative Performance',
    score: 1,
    summary: 'Canadian equity is the most consistent LW account contributor; leadership breadth is narrow.',
    definition: 'Measures which types of investments (stocks, bonds, private assets, etc.) are consistently driving returns.',
    summaryPoints: [
      'Portfolio returns have been supported primarily by a narrow set of holdings.',
      'Some asset categories have delivered steady contributions, while others have been inconsistent.',
      'A concentrated position has recently driven a significant portion of gains.',
      'Leadership across the portfolio is not broadly diversified.',
      'The overall signal is mildly positive but dependent on limited drivers.',
    ],
    individualAnalyses: [
      {
        title: 'Canadian Equity Sleeve',
        description: [
          'Positive frequency',
          'Rank frequency',
        ],
      },
      {
        title: 'Foreign Equity Sleeve',
        description: [
          'Drawdown presence',
          'Leadership variability',
        ],
      },
      {
        title: 'Fixed Income Sleeve',
        description: [
          'Stabilizer behavior',
          'Bottom-rank frequency',
        ],
      },
      {
        title: 'Private Assets Sleeve',
        description: [
          'Missing month issue',
          'Negative skew observation',
        ],
      },
      {
        title: 'DK account Resource Sleeve',
        description: [
          'Late-period acceleration',
          'Contribution strength',
        ],
      },
    ],
  },
  {
    id: 'trajectory',
    title: 'Manager Return Trajectory',
    score: 2,
    summary: 'LW account is stable; DK account accelerated sharply into late-2025/early-2026.',
    definition: "Measures a manager's performance trend over time.",
    summaryPoints: [
      'The core manager has remained stable over the observed period.',
      'A secondary manager has shown a strong upward trend in recent results.',
      'Recent portfolio momentum is increasingly influenced by one concentrated source.',
      'The upward trend is positive but creates rising dependence risk.',
      'The overall trajectory signal is moderately positive but not broadly diversified.',
    ],
    individualAnalyses: [
      {
        title: 'LW account 1Y Trajectory',
        description: [
          'Range stability',
          'Trend direction',
        ],
      },
      {
        title: 'LW account 3Y Annualized Trend',
        description: [
          'Improvement vs April',
          'Non-monotonic movement',
        ],
      },
      {
        title: 'DK account 12M Acceleration',
        description: [
          'Step-change in late 2025',
        ],
      },
      {
        title: 'DK account 3Y Annualized Climb',
        description: [
          'DK account NAV per Unit Growth',
          'Near doubling confirmation',
        ],
      },
      {
        title: 'Portfolio Dependence Overlay',
        description: [
          'Weight growth interaction',
        ],
      },
    ],
  },
  {
    id: 'consistency',
    title: 'DK account Return Consistency',
    score: -2,
    summary: 'Strong recent streak, but returns are lumpy and regime-dependent.',
    definition: "Measures how steady and repeatable DK account's returns are versus how volatile and cycle-dependent they are.",
    summaryPoints: [
      'The manager has delivered a series of strong recent gains.',
      'Returns have not been smooth and show meaningful variability across periods.',
      'Performance appears sensitive to changing market conditions.',
      'Positive streaks are present, but outcomes are cycle-dependent.',
      'The overall consistency signal is slightly negative due to variability.',
    ],
    individualAnalyses: [
      {
        title: 'Hit Rate',
        description: [
          'Positive period frequency',
          'Positive streak length',
        ],
      },
      {
        title: 'Return Dispersion',
        description: [
          'Min/max range',
          'Median comparison',
        ],
      },
      {
        title: 'Regime Shift Detection',
        description: [
          'Trailing 12M acceleration pattern',
        ],
      },
      {
        title: 'Negative Period Presence',
        description: [
          'Frequency of red checkpoints',
        ],
      },
    ],
  },
];

export const analyses: Analysis[] = baseAnalyses.map((analysis) => ({
  ...analysis,
  ...analysesDetails[analysis.id],
}));
