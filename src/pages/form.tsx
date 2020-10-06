import React from 'react';
import Form from '../components/form/form';
import FormGroup from '../components/form/group';
import Field from '../components/form/field';
import FieldArea from '../components/form/field-area';

export default class ExampleForm extends React.Component {
  render() {
    return (
      <div className="p-5">
        <span className="text-gray-700 text-2xl">Example Form</span>
        <hr className="my-5"/>
        <Form autoComplete="false">
          <FormGroup>
            <Field label="First Name" name="firstName"/>
            <Field label="Last Name" name="lastName"/>
          </FormGroup>
          <FieldArea label="Note" name="note"/>
          <button className="btn-blue">Send</button>
        </Form>
      </div>
    );
  }
}
