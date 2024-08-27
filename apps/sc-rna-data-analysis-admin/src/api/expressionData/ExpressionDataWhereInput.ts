import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { GeneWhereUniqueInput } from "../gene/GeneWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { SampleWhereUniqueInput } from "../sample/SampleWhereUniqueInput";

export type ExpressionDataWhereInput = {
  expressionValue?: FloatNullableFilter;
  gene?: GeneWhereUniqueInput;
  id?: StringFilter;
  sample?: SampleWhereUniqueInput;
};
