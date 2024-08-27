import { ExpressionDataCreateNestedManyWithoutGenesInput } from "./ExpressionDataCreateNestedManyWithoutGenesInput";

export type GeneCreateInput = {
  expressionDataItems?: ExpressionDataCreateNestedManyWithoutGenesInput;
  name?: string | null;
  symbolField?: string | null;
};
