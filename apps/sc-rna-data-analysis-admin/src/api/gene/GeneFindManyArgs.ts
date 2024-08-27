import { GeneWhereInput } from "./GeneWhereInput";
import { GeneOrderByInput } from "./GeneOrderByInput";

export type GeneFindManyArgs = {
  where?: GeneWhereInput;
  orderBy?: Array<GeneOrderByInput>;
  skip?: number;
  take?: number;
};
