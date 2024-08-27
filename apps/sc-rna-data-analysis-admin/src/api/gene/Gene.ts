import { ExpressionData } from "../expressionData/ExpressionData";

export type Gene = {
  createdAt: Date;
  expressionDataItems?: Array<ExpressionData>;
  id: string;
  name: string | null;
  symbolField: string | null;
  updatedAt: Date;
};
