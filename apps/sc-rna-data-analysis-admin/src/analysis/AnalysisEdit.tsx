import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
} from "react-admin";

export const AnalysisEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="analysisType"
          label="analysisType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
        <TextInput label="sampleSource" source="sampleSource" />
      </SimpleForm>
    </Edit>
  );
};
