import { Gene } from "../gene/Gene";
import { Sample } from "../sample/Sample";

export type ExpressionData = {
  createdAt: Date;
  expressionValue: number | null;
  gene?: Gene | null;
  id: string;
  sample?: Sample | null;
  updatedAt: Date;
};
