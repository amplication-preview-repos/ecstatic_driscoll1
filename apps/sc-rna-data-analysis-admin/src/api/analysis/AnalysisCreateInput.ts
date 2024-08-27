import { InputJsonValue } from "../../types";

export type AnalysisCreateInput = {
  analysisType?: "Option1" | null;
  results?: InputJsonValue;
  sampleSource?: string | null;
};
