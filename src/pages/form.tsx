import React from 'react';
import fetch from 'node-fetch';

import AutoComplete from '../components/form/autocomplete';
import Checkbox from '../components/form/checkbox';
import Field from '../components/form/field';
import FieldArea from '../components/form/field-area';
import Form from '../components/form/form';
import FormGroup from '../components/form/group';
import Radio from '../components/form/radio';
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
          <AutoComplete
            label="Auto Complete (static source)"
            source={[
              'Choice 1',
              'Choice 2',
              'Option 1',
              'Option 2',
              'Option 3',
            ]}
          />
          <AutoComplete
            label="Auto Complete (dynamic source)"
            source={async (keyword) => {
              let matches: any = [];

              await fetch('http://www.json-generator.com/api/json/get/cfJpSfFLhe?indent=2')
                .then(async (res: any) => {
                  const data = await res.json();
                  matches = data.filter(
                    (val: any) => val.value().toLowerCase().includes(keyword.toLowerCase())
                  );
                  return (matches as any);
                })
                .catch((err) => {

                });
              
            }}
          />
          <FieldArea label="Note" name="note" disabled/>
          <Select
            label="Select Label"
            options={[
              { label: 'Option 1', value: 'val-1' },
              { label: 'Option 2', value: 'val-2' },
              { label: 'Option 3', value: 'val-3' },
            ]}
          />
          <FormGroup>
            <Checkbox label="Choice 1" name="checkbox-a" disabled/>
            <Checkbox label="Choice 2" name="checkbox-b"/>
            <Checkbox label="Choice 3" name="checkbox-c"/>
          </FormGroup>
          <FormGroup>
            <Radio label="Option 1" name="radio-a" disabled/>
            <Radio label="Option 2" name="radio-a"/>
            <Radio label="Option 3" name="radio-a"/>
          </FormGroup>
          <button className="btn-blue">Send</button>
        </Form>
      </div>
    );
  }
}
