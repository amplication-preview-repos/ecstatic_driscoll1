import { Analysis as TAnalysis } from "../api/analysis/Analysis";

export const ANALYSIS_TITLE_FIELD = "sampleSource";

export const AnalysisTitle = (record: TAnalysis): string => {
  return record.sampleSource?.toString() || String(record.id);
};
