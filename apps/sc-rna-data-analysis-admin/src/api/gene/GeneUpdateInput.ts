import { ExpressionDataUpdateManyWithoutGenesInput } from "./ExpressionDataUpdateManyWithoutGenesInput";

export type GeneUpdateInput = {
  expressionDataItems?: ExpressionDataUpdateManyWithoutGenesInput;
  name?: string | null;
  symbolField?: string | null;
};
