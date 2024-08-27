import { JsonValue } from "type-fest";

export type Analysis = {
  analysisType?: "Option1" | null;
  createdAt: Date;
  id: string;
  results: JsonValue;
  sampleSource: string | null;
  updatedAt: Date;
};
