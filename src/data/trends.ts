import { Trend } from '../types';

export const trends: Trend[] = [
  {
    id: 'dk-acceleration',
    title: 'DK account return acceleration (late-2025 to Jan 2026)',
    explanation: [
      'DK account\'s reported trailing performance increased materially across the available checkpoints.',
      'The change is concentrated in the later part of the available series.',
      'The fund\'s per-unit value also increased over the observed period.',
      'The evidence supports a clear upward shift in DK account\'s recent return profile.',
    ],
    evidenceCards: [
      {
        title: 'DK account 12M Return % — Change',
        value: '53.96% → 94.00%',
        subtext: '2025-10-31 to 2026-01-31',
        detail: 'This shows the change in trailing twelve-month return, expressed in percent (%). The value increased from 53.96% to 94.00% between the two checkpoint dates.',
      },
      {
        title: 'DK account 12M Return % — Latest',
        value: '94.00%',
        subtext: 'as of 2026-01-31',
        detail: 'This shows the most recent trailing twelve-month return, expressed in percent (%). As of the latest checkpoint date, the return is 94.00%.',
      },
      {
        title: 'DK account NAV/Unit — Change',
        value: '988.0148 CAD/unit → 1,965.0288 CAD/unit',
        subtext: '2024-06-30 to 2026-01-31',
        detail: 'This shows the change in net asset value per unit, expressed as CAD per unit (CAD/unit). The NAV increased from 988.0148 to 1,965.0288 between the two checkpoint dates.',
      },
      {
        title: 'DK account JDS Resource ($) — Change',
        value: '$2,648,103.55 → $5,558,283.61',
        subtext: '2024-06-30 to 2026-01-31',
        detail: 'This shows the change in dollar market value, expressed in Canadian dollars (CAD). The market value increased from $2,648,103.55 to $5,558,283.61 between the two checkpoint dates.',
      },
      {
        title: 'Checkpoint Count (DK account 12M Return %)',
        value: '7 checkpoints',
        detail: 'This shows the number of available statement dates in the observed series. There are 7 checkpoints in the dataset for this metric.',
      },
    ],
    sparklineSeries: [
      {
        name: 'DK account 12M Return %',
        data: [
          { date: '2024-06-30', value: 18.28 },
          { date: '2025-04-30', value: 5.45 },
          { date: '2025-07-31', value: 22.01 },
          { date: '2025-10-31', value: 53.96 },
          { date: '2025-11-30', value: 67.80 },
          { date: '2025-12-31', value: 79.06 },
          { date: '2026-01-31', value: 94.00 },
        ],
      },
    ],
  },
  {
    id: 'dk-dependence',
    title: 'Portfolio dependence on DK account increased (weight drift)',
    explanation: [
      'DK account represents a larger share of the total portfolio at later checkpoints than earlier ones.',
      'The increase appears across multiple statement dates in the dataset.',
      'This indicates growing portfolio exposure to a single sleeve over time.',
      'The evidence supports a measurable shift in portfolio composition toward DK account.',
    ],
    evidenceCards: [
      {
        title: 'DK account % of Total — Change',
        value: '6.8% → 12.2%',
        subtext: '2024-06-30 to 2026-01-31',
        detail: 'This shows the change in allocation as percent of the total portfolio (%). The DK account allocation increased from 6.8% to 12.2% between the two checkpoint dates.',
      },
      {
        title: 'DK account % of Total — Latest',
        value: '12.2%',
        subtext: 'as of 2026-01-31',
        detail: 'This shows the most recent allocation as percent of the total portfolio (%). As of the latest checkpoint date, DK account represents 12.2% of the portfolio.',
      },
      {
        title: 'DK account % of Total — Range',
        value: '6.8% → 12.2%',
        detail: 'This shows the lowest and highest allocation values, expressed as percent of the total portfolio (%), across all available checkpoints. The range spans from 6.8% to 12.2%.',
      },
      {
        title: 'Total Portfolio ($) — Change',
        value: '$38,913,726.11 → $45,625,716.39',
        subtext: '2024-06-30 to 2026-01-31',
        detail: 'This shows the change in total portfolio market value, expressed in Canadian dollars (CAD). The total value increased from $38,913,726.11 to $45,625,716.39 between the two checkpoint dates.',
      },
      {
        title: 'Checkpoint Count (DK account % of Total)',
        value: '7 checkpoints',
        detail: 'This shows the number of available statement dates in the observed series. There are 7 checkpoints in the dataset for this metric.',
      },
    ],
    sparklineSeries: [
      {
        name: 'DK account % of Total',
        data: [
          { date: '2024-06-30', value: 6.8 },
          { date: '2025-04-30', value: 7.4 },
          { date: '2025-07-31', value: 8.2 },
          { date: '2025-10-31', value: 10.4 },
          { date: '2025-11-30', value: 11.4 },
          { date: '2025-12-31', value: 11.0 },
          { date: '2026-01-31', value: 12.2 },
        ],
      },
    ],
  },
  {
    id: 'lw-stability',
    title: 'LW account trailing returns stayed within a tight band (2025 checkpoints)',
    explanation: [
      'LW account\'s trailing one-year return changes modestly across the available checkpoints.',
      'The pattern reads as stable rather than sharply accelerating or collapsing.',
      'Month-to-date results vary more than the trailing figure, which is expected.',
      'The evidence supports a relatively steady trailing performance profile in the observed window.',
    ],
    evidenceCards: [
      {
        title: 'LW account 1Y — Range',
        value: '8.01% → 11.06%',
        detail: 'This shows the lowest and highest trailing one-year return, expressed in percent (%), across all available checkpoints. The range spans from 8.01% to 11.06%.',
      },
      {
        title: 'LW account 1Y — Latest',
        value: '11.01%',
        subtext: 'as of 2025-12-31',
        detail: 'This shows the most recent trailing one-year return, expressed in percent (%). As of the latest checkpoint date, the return is 11.01%.',
      },
      {
        title: 'LW account 1Y — Change',
        value: '9.62% → 11.01%',
        subtext: '2025-04-30 to 2025-12-31',
        detail: 'This shows the change in trailing one-year return, expressed in percent (%). The value increased from 9.62% to 11.01% between the two checkpoint dates.',
      },
      {
        title: 'Checkpoint Count (LW account 1Y)',
        value: '5 checkpoints',
        detail: 'This shows the number of available statement dates in the observed series. There are 5 checkpoints in the dataset for this metric.',
      },
    ],
    sparklineSeries: [
      {
        name: 'LW account 1Y',
        data: [
          { date: '2025-04-30', value: 9.62 },
          { date: '2025-07-31', value: 8.01 },
          { date: '2025-10-31', value: 11.06 },
          { date: '2025-11-30', value: 9.06 },
          { date: '2025-12-31', value: 11.01 },
        ],
      },
    ],
    viewDataSeries: [
      {
        name: 'LW account 1Y',
        data: [
          { date: '2025-04-30', value: 9.62 },
          { date: '2025-07-31', value: 8.01 },
          { date: '2025-10-31', value: 11.06 },
          { date: '2025-11-30', value: 9.06 },
          { date: '2025-12-31', value: 11.01 },
        ],
      },
      {
        name: 'LW account MTD',
        data: [
          { date: '2025-04-30', value: -2.12 },
          { date: '2025-07-31', value: 0.35 },
          { date: '2025-10-31', value: 1.07 },
          { date: '2025-11-30', value: 1.36 },
          { date: '2025-12-31', value: 0.39 },
        ],
      },
    ],
  },
  {
    id: 'lw-mixed-leadership',
    title: 'LW account sleeve returns show mixed leadership across categories (observed months)',
    explanation: [
      'LW account sleeve categories show different return patterns across the observed checkpoints.',
      'Some categories remain positive across the listed dates, while others include negative periods.',
      'The evidence indicates variation in which sleeve category contributes most in each checkpoint.',
      'Private Assets contains a missing checkpoint in the dataset for the observed window.',
    ],
    evidenceCards: [
      {
        title: 'Canadian Equity MTD — Range',
        value: '0.02% → 2.57%',
        detail: 'This shows the lowest and highest month-to-date return, expressed in percent (%), across all available checkpoints. The range spans from 0.02% to 2.57%.',
      },
      {
        title: 'Foreign Equity MTD — Range',
        value: '−5.26% → 1.73%',
        detail: 'This shows the lowest and highest month-to-date return, expressed in percent (%), across all available checkpoints. The range spans from −5.26% to 1.73%.',
      },
      {
        title: 'Fixed Income MTD — Range',
        value: '−1.05% → 0.67%',
        detail: 'This shows the lowest and highest month-to-date return, expressed in percent (%), across all available checkpoints. The range spans from −1.05% to 0.67%.',
      },
      {
        title: 'Private Assets MTD — Range (observed)',
        value: '−4.11% → 0.65%',
        subtext: 'Jul 2025 missing',
        detail: 'This shows the lowest and highest month-to-date return, expressed in percent (%), across the available statement checkpoints. One checkpoint is missing in the dataset, so the range reflects only the observed values.',
      },
      {
        title: 'Checkpoint Count (observed window)',
        value: '5 checkpoints',
        detail: 'This shows the number of available statement dates in the observed series. There are 5 checkpoints in the dataset for this metric.',
      },
    ],
    sparklineSeries: [
      {
        name: 'Canadian Equity MTD',
        data: [
          { date: '2025-04-30', value: 0.37 },
          { date: '2025-07-31', value: 0.02 },
          { date: '2025-10-31', value: 0.94 },
          { date: '2025-11-30', value: 2.57 },
          { date: '2025-12-31', value: 2.11 },
        ],
      },
      {
        name: 'Foreign Equity MTD',
        data: [
          { date: '2025-04-30', value: -5.26 },
          { date: '2025-07-31', value: 0.98 },
          { date: '2025-10-31', value: 1.72 },
          { date: '2025-11-30', value: 1.73 },
          { date: '2025-12-31', value: 0.25 },
        ],
      },
      {
        name: 'Fixed Income MTD',
        data: [
          { date: '2025-04-30', value: -0.58 },
          { date: '2025-07-31', value: -0.54 },
          { date: '2025-10-31', value: 0.67 },
          { date: '2025-11-30', value: 0.32 },
          { date: '2025-12-31', value: -1.05 },
        ],
      },
      {
        name: 'Private Assets MTD',
        data: [
          { date: '2025-04-30', value: -4.11 },
          { date: '2025-07-31', value: 'missing' },
          { date: '2025-10-31', value: 0.65 },
          { date: '2025-11-30', value: -0.27 },
          { date: '2025-12-31', value: 0.36 },
        ],
      },
    ],
  },
  {
    id: 'lw-cash-increase',
    title: 'LW account cash allocation increased (observed dates)',
    explanation: [
      'LW account cash weight is higher at later checkpoints than at the earlier baseline.',
      'The change is visible across multiple statement dates, though one checkpoint is missing.',
      'LW account equity weight moves in the opposite direction over the same baseline-to-latest span.',
      'The evidence supports a shift in LW account composition toward higher cash weight over time.',
    ],
    evidenceCards: [
      {
        title: 'LW account Cash % — Change',
        value: '1.2% → 4.3%',
        subtext: '2024-06-30 to 2026-01-31',
        detail: 'This shows the change in cash allocation as percent of the LW account sleeve (%). The cash weight increased from 1.2% to 4.3% between the two checkpoint dates.',
      },
      {
        title: 'LW account Cash % — Latest',
        value: '4.3%',
        subtext: 'as of 2026-01-31',
        detail: 'This shows the most recent cash allocation as percent of the LW account sleeve (%). As of the latest checkpoint date, cash represents 4.3% of the sleeve.',
      },
      {
        title: 'LW account Cash % — Range (observed)',
        value: '1.2% → 4.3%',
        subtext: 'Dec 2025 missing',
        detail: 'This shows the lowest and highest cash allocation, expressed as percent of the LW account sleeve (%), across the available checkpoints. One checkpoint is missing in the dataset, so the range reflects only the observed values.',
      },
      {
        title: 'LW account Equity % — Change',
        value: '69.6% → 64.8%',
        subtext: '2024-06-30 to 2026-01-31',
        detail: 'This shows the change in equity allocation as percent of the LW account sleeve (%). The equity weight decreased from 69.6% to 64.8% between the two checkpoint dates.',
      },
      {
        title: 'Checkpoint Count (LW account Cash % observed)',
        value: '6 checkpoints',
        detail: 'This shows the number of available statement dates in the observed series. There are 6 checkpoints in the dataset for this metric.',
      },
    ],
    sparklineSeries: [
      {
        name: 'LW account Cash %',
        data: [
          { date: '2024-06-30', value: 1.2 },
          { date: '2025-04-30', value: 3.3 },
          { date: '2025-07-31', value: 3.6 },
          { date: '2025-10-31', value: 4.2 },
          { date: '2025-11-30', value: 3.9 },
          { date: '2025-12-31', value: 'missing' },
          { date: '2026-01-31', value: 4.3 },
        ],
      },
    ],
    viewDataSeries: [
      {
        name: 'LW account Cash %',
        data: [
          { date: '2024-06-30', value: 1.2 },
          { date: '2025-04-30', value: 3.3 },
          { date: '2025-07-31', value: 3.6 },
          { date: '2025-10-31', value: 4.2 },
          { date: '2025-11-30', value: 3.9 },
          { date: '2025-12-31', value: 'missing' },
          { date: '2026-01-31', value: 4.3 },
        ],
      },
      {
        name: 'LW account Equity %',
        data: [
          { date: '2024-06-30', value: 69.6 },
          { date: '2026-01-31', value: 64.8 },
        ],
      },
    ],
  },
  {
    id: 'dk-lumpiness',
    title: 'DK account return lumpiness and regime sensitivity (observed checkpoints)',
    explanation: [
      'DK account\'s period returns vary meaningfully across the available checkpoints.',
      'The return pattern includes both negative and strongly positive periods.',
      'The series shows uneven "spike" behavior rather than a smooth sequence.',
      'The evidence supports a return profile that changes noticeably across checkpoints.',
    ],
    evidenceCards: [
      {
        title: 'DK account Period Return % — Range',
        value: '−4.73% → 12.62%',
        detail: 'This shows the lowest and highest period return, expressed in percent (%), across all available checkpoints. The range spans from −4.73% to 12.62%.',
      },
      {
        title: 'DK account Period Return % — Latest',
        value: '10.57%',
        subtext: 'as of 2026-01-31',
        detail: 'This shows the most recent period return, expressed in percent (%). As of the latest checkpoint date, the return is 10.57%.',
      },
      {
        title: 'DK account 12M Return % — Latest',
        value: '94.00%',
        subtext: 'as of 2026-01-31',
        detail: 'This shows the most recent trailing twelve-month return, expressed in percent (%). As of the latest checkpoint date, the return is 94.00%.',
      },
      {
        title: 'Checkpoint Count (DK account Period Return %)',
        value: '7 checkpoints',
        detail: 'This shows the number of available statement dates in the observed series. There are 7 checkpoints in the dataset for this metric.',
      },
    ],
    sparklineSeries: [
      {
        name: 'DK account Period Return %',
        data: [
          { date: '2024-06-30', value: -4.73 },
          { date: '2025-04-30', value: -3.57 },
          { date: '2025-07-31', value: 0.34 },
          { date: '2025-10-31', value: 2.77 },
          { date: '2025-11-30', value: 12.62 },
          { date: '2025-12-31', value: 2.44 },
          { date: '2026-01-31', value: 10.57 },
        ],
      },
    ],
    viewDataSeries: [
      {
        name: 'DK account Period Return %',
        data: [
          { date: '2024-06-30', value: -4.73 },
          { date: '2025-04-30', value: -3.57 },
          { date: '2025-07-31', value: 0.34 },
          { date: '2025-10-31', value: 2.77 },
          { date: '2025-11-30', value: 12.62 },
          { date: '2025-12-31', value: 2.44 },
          { date: '2026-01-31', value: 10.57 },
        ],
      },
      {
        name: 'DK account 12M Return %',
        data: [
          { date: '2024-06-30', value: 18.28 },
          { date: '2025-04-30', value: 5.45 },
          { date: '2025-07-31', value: 22.01 },
          { date: '2025-10-31', value: 53.96 },
          { date: '2025-11-30', value: 67.80 },
          { date: '2025-12-31', value: 79.06 },
          { date: '2026-01-31', value: 94.00 },
        ],
      },
    ],
  },
];
