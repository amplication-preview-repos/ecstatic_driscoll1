import { GeneWhereUniqueInput } from "../gene/GeneWhereUniqueInput";
import { SampleWhereUniqueInput } from "../sample/SampleWhereUniqueInput";

export type ExpressionDataCreateInput = {
  expressionValue?: number | null;
  gene?: GeneWhereUniqueInput | null;
  sample?: SampleWhereUniqueInput | null;
};
