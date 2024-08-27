import { ExpressionData } from "../expressionData/ExpressionData";

export type Sample = {
  collectionDate: Date | null;
  createdAt: Date;
  description: string | null;
  expressionDataItems?: Array<ExpressionData>;
  id: string;
  sampleName: string | null;
  updatedAt: Date;
};
