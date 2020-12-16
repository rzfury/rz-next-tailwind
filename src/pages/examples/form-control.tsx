import React from 'react';

import Layout from '../../layout/layout';
import {
  AutoComplete,
  Checkbox,
  Field,
  FieldArea,
  FieldGroup,
  Form,
  FormGroup,
  Select,
  Radio,
} from '../../components/common/form';
import Button from '../../components/common/button';
import http from '../../services/http';

export default class ExampleForm extends React.Component {
  autoCompleteSource = (keyword: string) => {
    return new Promise((resolve, reject) => {
      http.get('http://www.json-generator.com/api/json/get/cfJpSfFLhe', { indent: 2 })
        .then(async (data: any) => {
          data = data.filter(
            (val: any) => val.label.toLowerCase().includes(keyword.toLowerCase())
          );
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  render() {
    return (
      <Layout>
        <div className="p-5">
          <span className="text-gray-700 text-2xl">TailwindCSS - Example Form</span>
          <hr className="my-5" />
          <Form autoComplete="false">
            <FormGroup>
              <Field label="First Name" name="firstName" labelFloat/>
              <Field label="Last Name" name="lastName" labelFloat/>
            </FormGroup>
            <FieldGroup>
              <FieldGroup.Addons>Example</FieldGroup.Addons>
              <Field label="Example Field" name="exampleField" />
              <FieldGroup.Button role="danger">Clear</FieldGroup.Button>
            </FieldGroup>
            <AutoComplete
              label="Auto Complete (static source)"
              source={[
                { label: 'Choice 1', value: 'aaaaaaa' },
                { label: 'Choice 2', value: 'bbbb' },
                { label: 'Choice 3', value: 'cccc' },
              ]}
              onSelect={(value) => console.log(value)}
            />
            <AutoComplete
              label="Auto Complete (dynamic source)"
              source={async (keyword: any) => {
                return await this.autoCompleteSource(keyword);
              }}
              onSelect={(value) => console.log(value)}
            />
            <FieldArea label="Note" name="note" disabled />
            <Select
              label="Select Label"
              options={[
                { label: 'Option 1', value: 'val-1' },
                { label: 'Option 2', value: 'val-2' },
                { label: 'Option 3', value: 'val-3' },
              ]}
            />
            <FormGroup>
              <Checkbox label="Choice 1" name="checkbox-a" disabled />
              <Checkbox label="Choice 2" name="checkbox-b" />
              <Checkbox label="Choice 3" name="checkbox-c" />
            </FormGroup>
            <FormGroup>
              <Radio label="Option 1" name="radio-a" disabled />
              <Radio label="Option 2" name="radio-a" />
              <Radio label="Option 3" name="radio-a" />
            </FormGroup>
            <Button role="primary">Send</Button>
          </Form>
        </div>
      </Layout>
    );
  }
}
