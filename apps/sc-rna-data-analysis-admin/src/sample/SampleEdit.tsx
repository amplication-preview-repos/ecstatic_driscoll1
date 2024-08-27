import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ExpressionDataTitle } from "../expressionData/ExpressionDataTitle";

export const SampleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="collectionDate" source="collectionDate" />
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="expressionDataItems"
          reference="ExpressionData"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExpressionDataTitle} />
        </ReferenceArrayInput>
        <TextInput label="sampleName" source="sampleName" />
      </SimpleForm>
    </Edit>
  );
};
