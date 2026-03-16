import { Analysis } from '../types';
import { analysesDetails } from './analysesDetails';

const baseAnalyses: Analysis[] = [
  {
    id: 'drift',
    title: 'Portfolio Balance & Movement',
    score: -2,
    summary: 'Core investment balance improved, but Tactical Manager concentration increased significantly.',
    definition: 'Tracks how the overall portfolio is moving compared to our target balance.',
    summaryPoints: [
      'The main investment accounts have moved back toward a healthier balance.',
      'Savings levels have increased slightly.',
      'A single investment area has grown much larger due to market gains, not a specific plan.',
      'The improving balance across core accounts is a positive sign.',
      'However, the rising focus on one single area adds risk, leading to a slightly negative score.',
    ],
    individualAnalyses: [
      {
        title: 'Core Manager Investment Balance',
        description: [
          'Percentage of Core account in stocks over time',
          'Staying below the 70% limit',
          'Direction and speed of change',
        ],
      },
      {
        title: 'Tactical Manager Concentration',
        description: [
          'Tactical Manager percentage of the total portfolio',
          'Total change (from 6.8% to 12.2%)',
          'Speed of growth in late 2025',
          'Gains from market growth vs. new money',
        ],
      },
      {
        title: 'Core Manager Cash Balance',
        description: [
          'Cash percentage inside the Core account',
          'Change over time (1.2% to 4.3%)',
          'Driven by monthly spending vs. long-term planning',
        ],
      },
      {
        title: 'Balance Scoring Model',
        description: [
          'Calculated using:',
          'Core Account (30%)',
          'Tactical Focus (50%)',
          'Core Cash (20%)',
        ],
      },
    ],
  },
  {
    id: 'benchmark',
    title: 'Performance Comparison',
    score: -2,
    summary: 'Main accounts trailed market averages; Tactical Manager grew faster but adds more risk.',
    definition: "Compares how your investments performed against standard market benchmarks.",
    summaryPoints: [
      'The main portfolio manager has delivered steady but cautious results.',
      'A second, smaller manager has produced very strong recent gains.',
      'The biggest gains came from one specific area rather than a wide range of investments.',
      'Overall, the main portfolio has not quite kept up with the major markets.',
      'The risk of being focused on one area offsets the big gains, resulting in a slightly negative score.',
    ],
    individualAnalyses: [
      {
        title: 'Manager Comparison (Core vs Tactical)',
        description: [
          'Core Manager 1-year performance path',
          'Tactical Manager 1-year performance path',
          'The performance gap between the two over time',
        ],
      },
      {
        title: 'Core Manager vs Market Averages',
        description: [
          'Vs Canadian Market Index',
          'Vs International Market Index',
          'Vs Bond Market Index',
          'Comparison to a standard diversified benchmark',
        ],
      },
      {
        title: 'Tactical Manager vs Market Averages',
        description: [
          'Performance vs Canadian Market (Oct)',
          'Performance vs Canadian Market (Nov)',
        ],
      },
      {
        title: 'Where Gains Came From',
        description: [
          'Impact of US stock market changes',
          'Stability of Canadian investments',
          'Behavior of safer bond investments',
        ],
      },
      {
        title: 'Big Picture Risk Check',
        description: [
          'Interaction of high concentration and growth',
          'Balance between stocks and cash',
        ],
      },
    ],
  },
  {
    id: 'cashflow',
    title: 'Cash Flow Impact',
    score: 0,
    summary: "Most changes were from growth, not new deposits; data is limited for some areas.",
    definition: "Looks at how much value came from growth versus money being added or removed.",
    summaryPoints: [
      'Most changes in value seem to come from stock prices moving, not from deposits or withdrawals.',
      'We can see growth clearly in individual accounts.',
      'Some parts of the portfolio don\'t have enough information for a full money-flow check.',
      'Overall, movememts of money aren\'t distorting the real performance numbers.',
      'The score is neutral because we need more data for a complete picture.',
    ],
    individualAnalyses: [
      {
        title: 'Core Account Estimated Deposits/Withdrawals',
        description: [
          'October to November',
          'November to December',
        ],
      },
      {
        title: 'Tactical Account Estimated Deposits/Withdrawals',
        description: [
          'October to November',
          'November to December',
          'December to January',
        ],
      },
      {
        title: 'Private Investment Tracking',
        description: [
          'Inclusion in the current report',
          'Limited data on monthly performance',
        ],
      },
      {
        title: 'Data Quality Check',
        description: [
          'Effect of changing portfolio structure',
          'Availability of full history for all accounts',
        ],
      },
    ],
  },
  {
    id: 'assetclass',
    title: 'Investment Category Performance',
    score: 1,
    summary: 'Canadian stocks are the most steady contributors; growth is coming from just a few areas.',
    definition: 'Shows which types of investments (stocks, bonds, etc.) are actually making money.',
    summaryPoints: [
      'Overall growth is being carried by a small number of specific holdings.',
      'Some categories are very steady, while others go up and down frequently.',
      'One specific area has been the main engine of growth recently.',
      'The growth is not spread out evenly across the whole portfolio.',
      'The score is slightly positive but would be better if more areas were contributing.',
    ],
    individualAnalyses: [
      {
        title: 'Canadian Stocks',
        description: [
          'Frequency of positive months',
          'Performance ranking vs. other areas',
        ],
      },
      {
        title: 'International Stocks',
        description: [
          'Recent drops in value',
          'Consistency of performance',
        ],
      },
      {
        title: 'Safer Investments (Bonds)',
        description: [
          'Action as a safety cushion',
          'Performance during market growth',
        ],
      },
      {
        title: 'Private Investments',
        description: [
          'Impact of missing monthly data',
          'Observation of unusual performance drops',
        ],
      },
      {
        title: 'Tactical Growth Area',
        description: [
          'Speed of growth in late 2025',
          'Strength of performance contribution',
        ],
      },
    ],
  },
  {
    id: 'trajectory',
    title: 'Performance Trends',
    score: 2,
    summary: 'Core Manager is stable; Tactical Manager grew very rapidly in late 2025.',
    definition: "Measures whether the performance of managers is trending up, down, or staying flat.",
    summaryPoints: [
      'The main manager has stayed very consistent over the past year.',
      'The secondary manager has shown a very strong upward move recently.',
      'Current momentum is becoming very dependent on one single source of growth.',
      'The fast growth is good, but it makes the portfolio more vulnerable to that one area.',
      'The trend is positive overall, but it is not widespread.',
    ],
    individualAnalyses: [
      {
        title: 'Core Manager 1-Year Trend',
        description: [
          'Stability of the performance range',
          'Direction of the overall trend',
        ],
      },
      {
        title: 'Core Manager 3-Year History',
        description: [
          'Improvement compared to earlier in the year',
          'Ups and downs in the long-term trend',
        ],
      },
      {
        title: 'Tactical Manager 12-Month Growth',
        description: [
          'Significant jump in performance late in 2025',
        ],
      },
      {
        title: 'Tactical Manager 3-Year Growth',
        description: [
          'Value growth per unit',
          'Confirmation that value nearly doubled',
        ],
      },
      {
        title: 'System Risk Check',
        description: [
          'Growing importance of one specific account',
        ],
      },
    ],
  },
  {
    id: 'consistency',
    title: 'Investment Stability Study',
    score: -2,
    summary: 'Strong recent gains, but performance jumpy and dependent on market conditions.',
    definition: "Measures how steady and repeatable gains are versus how much they depend on lucky timing or market cycles.",
    summaryPoints: [
      'We have seen several strong months in a row recently.',
      'However, performance has been "lumpy" and varies a lot from month to month.',
      'Results seem very sensitive to what is happening in the wider market.',
      'The recent winning streak is great, but it might not be easy to repeat.',
      'The score is slightly negative because the results aren\'t as steady as they could be.',
    ],
    individualAnalyses: [
      {
        title: 'Winning Streak Check',
        description: [
          'How often months are positive',
          'Length of continuous winning streaks',
        ],
      },
      {
        title: 'Spread of Results',
        description: [
          'Gap between best and worst months',
          'Typical "average" month performance',
        ],
      },
      {
        title: 'Market Phase Detection',
        description: [
          'Pattern of growth in late 2025',
        ],
      },
      {
        title: 'Negative Month Frequency',
        description: [
          'How often we see a drop in value',
        ],
      },
    ],
  },
];

export const analyses: Analysis[] = baseAnalyses.map((analysis) => ({
  ...analysis,
  ...analysesDetails[analysis.id],
}));
