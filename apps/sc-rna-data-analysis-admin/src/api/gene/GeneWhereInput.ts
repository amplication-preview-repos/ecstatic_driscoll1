import { ExpressionDataListRelationFilter } from "../expressionData/ExpressionDataListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GeneWhereInput = {
  expressionDataItems?: ExpressionDataListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  symbolField?: StringNullableFilter;
};
