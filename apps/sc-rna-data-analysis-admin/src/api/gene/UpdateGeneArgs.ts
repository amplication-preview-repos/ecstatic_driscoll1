import { GeneWhereUniqueInput } from "./GeneWhereUniqueInput";
import { GeneUpdateInput } from "./GeneUpdateInput";

export type UpdateGeneArgs = {
  where: GeneWhereUniqueInput;
  data: GeneUpdateInput;
};
