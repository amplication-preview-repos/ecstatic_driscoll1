import { ExpressionData as TExpressionData } from "../api/expressionData/ExpressionData";

export const EXPRESSIONDATA_TITLE_FIELD = "id";

export const ExpressionDataTitle = (record: TExpressionData): string => {
  return record.id?.toString() || String(record.id);
};
