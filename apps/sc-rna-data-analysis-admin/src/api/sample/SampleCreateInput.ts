import { ExpressionDataCreateNestedManyWithoutSamplesInput } from "./ExpressionDataCreateNestedManyWithoutSamplesInput";

export type SampleCreateInput = {
  collectionDate?: Date | null;
  description?: string | null;
  expressionDataItems?: ExpressionDataCreateNestedManyWithoutSamplesInput;
  sampleName?: string | null;
};
