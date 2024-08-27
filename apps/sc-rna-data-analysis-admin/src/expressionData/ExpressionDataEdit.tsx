import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { GeneTitle } from "../gene/GeneTitle";
import { SampleTitle } from "../sample/SampleTitle";

export const ExpressionDataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="expressionValue" source="expressionValue" />
        <ReferenceInput source="gene.id" reference="Gene" label="Gene">
          <SelectInput optionText={GeneTitle} />
        </ReferenceInput>
        <ReferenceInput source="sample.id" reference="Sample" label="Sample">
          <SelectInput optionText={SampleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
