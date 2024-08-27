import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { GENE_TITLE_FIELD } from "../gene/GeneTitle";
import { SAMPLE_TITLE_FIELD } from "./SampleTitle";

export const SampleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="collectionDate" source="collectionDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="sampleName" source="sampleName" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ExpressionData"
          target="sampleId"
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
