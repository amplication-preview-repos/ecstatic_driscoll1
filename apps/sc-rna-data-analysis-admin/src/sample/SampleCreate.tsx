import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ExpressionDataTitle } from "../expressionData/ExpressionDataTitle";

export const SampleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
