import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { GENE_TITLE_FIELD } from "./GeneTitle";
import { SAMPLE_TITLE_FIELD } from "../sample/SampleTitle";

export const GeneShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="symbol" source="symbolField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ExpressionData"
          target="geneId"
          label="ExpressionDataItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="expressionValue" source="expressionValue" />
            <ReferenceField label="Gene" source="gene.id" reference="Gene">
              <TextField source={GENE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Sample"
              source="sample.id"
              reference="Sample"
            >
              <TextField source={SAMPLE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
