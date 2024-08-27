import { InputJsonValue } from "../../types";

export type AnalysisUpdateInput = {
  analysisType?: "Option1" | null;
  results?: InputJsonValue;
  sampleSource?: string | null;
};
