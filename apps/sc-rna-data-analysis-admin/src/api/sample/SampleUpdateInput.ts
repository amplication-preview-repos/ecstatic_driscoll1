import { ExpressionDataUpdateManyWithoutSamplesInput } from "./ExpressionDataUpdateManyWithoutSamplesInput";

export type SampleUpdateInput = {
  collectionDate?: Date | null;
  description?: string | null;
  expressionDataItems?: ExpressionDataUpdateManyWithoutSamplesInput;
  sampleName?: string | null;
};
