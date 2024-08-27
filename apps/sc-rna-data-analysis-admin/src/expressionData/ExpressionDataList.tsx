import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { GENE_TITLE_FIELD } from "../gene/GeneTitle";
import { SAMPLE_TITLE_FIELD } from "../sample/SampleTitle";

export const ExpressionDataList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ExpressionDataItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="expressionValue" source="expressionValue" />
        <ReferenceField label="Gene" source="gene.id" reference="Gene">
          <TextField source={GENE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField label="Sample" source="sample.id" reference="Sample">
          <TextField source={SAMPLE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
