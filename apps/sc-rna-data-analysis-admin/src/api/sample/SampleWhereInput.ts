import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ExpressionDataListRelationFilter } from "../expressionData/ExpressionDataListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type SampleWhereInput = {
  collectionDate?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  expressionDataItems?: ExpressionDataListRelationFilter;
  id?: StringFilter;
  sampleName?: StringNullableFilter;
};
