import { GeneWhereUniqueInput } from "../gene/GeneWhereUniqueInput";
import { SampleWhereUniqueInput } from "../sample/SampleWhereUniqueInput";

export type ExpressionDataUpdateInput = {
  expressionValue?: number | null;
  gene?: GeneWhereUniqueInput | null;
  sample?: SampleWhereUniqueInput | null;
};
