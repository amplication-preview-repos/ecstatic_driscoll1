import { ExpressionDataWhereInput } from "./ExpressionDataWhereInput";
import { ExpressionDataOrderByInput } from "./ExpressionDataOrderByInput";

export type ExpressionDataFindManyArgs = {
  where?: ExpressionDataWhereInput;
  orderBy?: Array<ExpressionDataOrderByInput>;
  skip?: number;
  take?: number;
};
