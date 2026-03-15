export interface InsightTile {
  id: string;
  title: string;
  value: string;
  subtext: string;
  explanation: string;
}

export interface SleeveExtreme {
  name: string;
  value: number;
  date: string;
  definition?: string;
}

export interface DKShareCheckpoint {
  date: string;
  percentage: number;
}

export interface TimelineMonth {
  month: string;
  hasData: boolean;
}

export const insightTiles: InsightTile[] = [
  {
    id: 'portfolio-value',
    title: 'Portfolio Value Change',
    value: '$38,913,726.11 → $45,625,716.39',
    subtext: '2024-06-30 to 2026-01-31',
    explanation: 'Shows how the total reported portfolio market value (in dollars, $) changed between the two checkpoint dates. It compares the starting checkpoint value to the ending checkpoint value.',
  },
  {
    id: 'dk-weight',
    title: 'DK Weight Change',
    value: '6.8% → 12.2%',
    subtext: 'DK % of Total (2024-06-30 to 2026-01-31)',
    explanation: 'Shows how DK\'s share of the total portfolio (in percent, %) changed between the two checkpoint dates. This is DK\'s percentage of total portfolio value at each checkpoint.',
  },
  {
    id: 'dk-return-shift',
    title: 'DK 12M Return % Shift (late series)',
    value: '53.96% → 94.00%',
    subtext: '2025-10-31 to 2026-01-31',
    explanation: 'Shows how DK\'s trailing twelve-month return (in percent, %) changed between the two specified late-series checkpoints. This reflects the reported 12-month performance reading at each checkpoint date.',
  },
  {
    id: 'lw-return-range',
    title: 'LW 1Y Return Range (2025 checkpoints)',
    value: '8.01% → 11.06%',
    subtext: 'range across 2025 checkpoints',
    explanation: 'Shows the lowest and highest LW trailing one-year return (in percent, %) observed across the available 2025 checkpoint dates in the dataset. It is a range across those checkpoints, not a complete monthly history.',
  },
];

export const sleeveExtremes: SleeveExtreme[] = [
  {
    name: 'Best Canadian Equity MTD',
    value: 2.57,
    date: '2025-10-31',
    definition: 'The highest Canadian Equity month-to-date return observed in the LW checkpoints.',
  },
  {
    name: 'Worst Foreign Equity MTD',
    value: -5.26,
    date: '2024-09-30',
    definition: 'The lowest Foreign Equity month-to-date return observed in the LW checkpoints.',
  },
  {
    name: 'Worst Private Assets MTD',
    value: -4.11,
    date: '2024-09-30',
    definition: 'The lowest Private Assets month-to-date return observed in the LW checkpoints. One checkpoint in the series is missing in the dataset.',
  },
  {
    name: 'Worst LW Account MTD',
    value: -2.12,
    date: '2024-09-30',
    definition: 'The lowest LW account month-to-date return observed across the LW checkpoint dates.',
  },
];

export const dkShareCheckpoints: DKShareCheckpoint[] = [
  { date: '2024-06-30', percentage: 6.8 },
  { date: '2024-09-30', percentage: 7.1 },
  { date: '2025-04-30', percentage: 9.3 },
  { date: '2025-10-31', percentage: 10.8 },
  { date: '2025-11-30', percentage: 11.5 },
  { date: '2025-12-31', percentage: 11.8 },
  { date: '2026-01-31', percentage: 12.2 },
];

export const timelineMonths: TimelineMonth[] = [
  { month: '2024-06', hasData: true },
  { month: '2024-07', hasData: false },
  { month: '2024-08', hasData: false },
  { month: '2024-09', hasData: true },
  { month: '2024-10', hasData: false },
  { month: '2024-11', hasData: false },
  { month: '2024-12', hasData: false },
  { month: '2025-01', hasData: false },
  { month: '2025-02', hasData: false },
  { month: '2025-03', hasData: false },
  { month: '2025-04', hasData: true },
  { month: '2025-05', hasData: false },
  { month: '2025-06', hasData: false },
  { month: '2025-07', hasData: false },
  { month: '2025-08', hasData: false },
  { month: '2025-09', hasData: false },
  { month: '2025-10', hasData: true },
  { month: '2025-11', hasData: true },
  { month: '2025-12', hasData: true },
  { month: '2026-01', hasData: true },
];

export const watchItems = [
  'Portfolio value increased over the period.',
  "DK's share of the portfolio grew materially across checkpoints — exposure is rising.",
  "DK's returns are lumpy across checkpoints — outcomes swing from negative to strongly positive periods.",
  "LW's trailing one-year returns look relatively steady across the available 2025 checkpoints.",
  'Within LW, sleeve returns are mixed across the observed months, and a key sleeve series has a missing checkpoint.',
  'Data is checkpoint-based with gaps and some missing fields — treat trends as directional, not precise.',
];

export const keyInsightsDefinitions: Record<string, string> = {
  'checkpoint-data': 'The dataset reports values only on certain statement dates, not every month.',
  'checkpoint-series': "A set of values taken from the dataset's available statement dates, not a complete monthly series.",
  'mtd': 'Month-to-date return reported as of the statement date, expressed as a percent.',
  'trailing-12m': 'Return over the prior twelve months as reported at the statement date, expressed as a percent.',
  'dk-percent-total': 'The portion of total portfolio value represented by DK at the statement date.',
  'observed-extremes': 'The highest or lowest values visible in the available checkpoints, not necessarily the true extremes over the full period.',
  'sleeve-extremes': 'Shows the most positive and most negative month-to-date returns observed in the LW data. These are the highest/lowest values visible in the dataset, not necessarily the true extremes for the full period.',
};
