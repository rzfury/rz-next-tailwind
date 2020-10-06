import React from 'react';

import Checkbox from '../components/form/checkbox';
import Form from '../components/form/form';
import Field from '../components/form/field';
import FieldArea from '../components/form/field-area';
import FormGroup from '../components/form/group';
import Select from '../components/form/select';

export default class ExampleForm extends React.Component {
  render() {
    return (
      <div className="p-5">
        <span className="text-gray-700 text-2xl">TailwindCSS - Example Form</span>
        <hr className="my-5"/>
        <Form autoComplete="false">
          <FormGroup>
            <Field label="First Name" name="firstName"/>
            <Field label="Last Name" name="lastName" />
          </FormGroup>
          <FieldArea label="Note" name="note"/>
          <Select
            label="Select Label"
            options={[
              { label: 'Option 1', value: 'val-1' },
              { label: 'Option 2', value: 'val-2' },
              { label: 'Option 3', value: 'val-3' },
            ]}
          />
          <Checkbox label="Choice 1" name="checkbox-a"/>
          <Checkbox label="Choice 2" name="checkbox-b"/>
          <Checkbox label="Choice 3" name="checkbox-c"/>
          <button className="btn-blue">Send</button>
        </Form>
      </div>
    );
  }
}
