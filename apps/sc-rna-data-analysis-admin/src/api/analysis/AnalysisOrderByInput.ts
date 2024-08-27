import { SortOrder } from "../../util/SortOrder";

export type AnalysisOrderByInput = {
  analysisType?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  results?: SortOrder;
  sampleSource?: SortOrder;
  updatedAt?: SortOrder;
};
