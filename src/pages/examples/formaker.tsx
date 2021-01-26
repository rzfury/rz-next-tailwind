import React from "react";
import http from "../../libraries/http";
import Layout from "../../layout/layout";
import Formaker from "../../libraries/formaker";

class ExampleFormaker extends React.Component {
  formaker: Formaker;
  formSchema: RazorWindProps.Formaker.InputSchema[] = [
    {
      type: 'group',
      group: 'form',
      formGroupItem: [
        {
          type: 'field',
          name: 'firstName',
          label: 'First Name',
          option: { labelFloat: true },
        },
        {
          type: 'field',
          name: 'lastName',
          label: 'Last Name',
          option: { labelFloat: true },
        },
      ]
    },
    {
      type: 'group',
      group: 'field',
      name: 'exampleField',
      fieldGroupItem: {
        left: [{ type: 'addons', content: 'Example' }],
        right: [{ type: 'button', content: 'Clear', buttonOption: { role: 'danger' }}]
      }
    },
    {
      type: 'autocomplete',
      label: 'Auto Complete (static source)',
      name: 'acStatic',
      autoCompleteSource: [
        { label: 'Choice 1', value: 'aaaaaaa' },
        { label: 'Choice 2', value: 'bbbb' },
        { label: 'Choice 3', value: 'cccc' },
      ],
      option: { onSelect: (value) => console.log(value) }
    },
    {
      type: 'autocomplete',
      label: 'Auto Complete (dynamic source)',
      name: 'acDynamic',
      autoCompleteSource: async (keyword: any) => {
        return await this.autoCompleteSource(keyword);
      },
      option: { onSelect: (value) => console.log(value) }
    },
    {
      type: 'textarea',
      label: 'Note',
      name: 'note',
      option: { disabled: true }
    },
    {
      type: 'select',
      label: 'Select Label',
      name: 'selectForm',
      option: {
        options: [
          { label: 'Option 1', value: 'val-1' },
          { label: 'Option 2', value: 'val-2' },
          { label: 'Option 3', value: 'val-3' },
        ]
      },
    },
    {
      type: 'group',
      group: 'form',
      formGroupItem: [
        {
          type: 'checkbox',
          label: 'Checkbox 1',
          name: 'checkbox1'
        },
        {
          type: 'checkbox',
          label: 'Checkbox 2',
          name: 'checkbox2'
        },
        {
          type: 'checkbox',
          label: 'Checkbox 3',
          name: 'checkbox3'
        }
      ]
    },
    {
      type: 'group',
      group: 'form',
      formGroupItem: [
        {
          type: 'radio',
          label: 'Radio 1',
          name: 'radio1'
        },
        {
          type: 'radio',
          label: 'Radio 2',
          name: 'radio2'
        },
        {
          type: 'radio',
          label: 'Radio 3',
          name: 'radio3'
        }
      ]
    },
  ];

  constructor(props: any) {
    super(props);

    this.formaker = new Formaker(this.formSchema, this.onSubmit);
  }

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

  onSubmit = (values: any) => {
    console.log(values);
  }

  render() {
    const FormakerComponent = this.formaker.Component;
    return (
      <Layout>
        <div className="p-5">
          <span className="text-gray-700 text-2xl">TailwindCSS - Example Form with Formaker</span>
          <hr className="my-5" />
          <FormakerComponent />
        </div>
      </Layout>
    )
  }
}

export default ExampleFormaker;
