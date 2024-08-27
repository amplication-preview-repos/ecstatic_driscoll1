import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { GeneTitle } from "../gene/GeneTitle";
import { SampleTitle } from "../sample/SampleTitle";

export const ExpressionDataCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="expressionValue" source="expressionValue" />
        <ReferenceInput source="gene.id" reference="Gene" label="Gene">
          <SelectInput optionText={GeneTitle} />
        </ReferenceInput>
        <ReferenceInput source="sample.id" reference="Sample" label="Sample">
          <SelectInput optionText={SampleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
