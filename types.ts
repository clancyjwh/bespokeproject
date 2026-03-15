export interface SubComponentScore {
  label: string;
  score: number;
  weight?: string;
}

export interface KeyDataPoint {
  label: string;
  value: string;
  subPoints?: string[];
}

export interface KeyMetric {
  title: string;
  value: string;
  subtext?: string;
  detail?: string;
  evidence?: string[];
}

export interface SupportingSignal {
  title: string;
  value: string;
  evidence?: string[];
}

export interface Analysis {
  id: string;
  title: string;
  score: number;
  summary: string;
  definition: string;
  summaryPoints?: string[];
  individualAnalyses: IndividualAnalysis[];
  statusLabel?: string;
  keyMetrics?: KeyMetric[];
  subComponentScores?: SubComponentScore[];
  weights?: { label: string; value: string }[];
  calculation?: string;
  supportingSignals?: SupportingSignal[];
  whatThisMeasures?: string[];
  keyDataPoints?: KeyDataPoint[];
  scoringLogic?: string[];
  interpretation?: string[];
  datasetNotes?: string[];
}

export interface IndividualAnalysis {
  title: string;
  description: string[];
}

export interface CheckpointData {
  date: string;
  value: number | string;
}

export interface TrendSeries {
  name: string;
  data: CheckpointData[];
}

export interface Trend {
  id: string;
  title: string;
  explanation: string[];
  evidenceCards: KeyMetric[];
  sparklineSeries: TrendSeries[];
  viewDataSeries?: TrendSeries[];
}
