import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AnalysisWhereInput = {
  analysisType?: "Option1";
  id?: StringFilter;
  results?: JsonFilter;
  sampleSource?: StringNullableFilter;
};
