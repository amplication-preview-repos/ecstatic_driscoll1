import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ExpressionDataTitle } from "../expressionData/ExpressionDataTitle";

export const GeneCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="expressionDataItems"
          reference="ExpressionData"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExpressionDataTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="symbol" source="symbolField" />
      </SimpleForm>
    </Create>
  );
};
