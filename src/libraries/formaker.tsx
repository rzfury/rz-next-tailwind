import React from 'react';
import { Formik, FormikProps, Field as FormikField } from 'formik';

import Button from '../components/common/button';
import { AutoComplete, Checkbox, Field, FieldArea, FieldGroup, Form, FormGroup, Radio, Select } from '../components/common/form';

class Formaker {
  private inputSchema: RazorWindProps.Formaker.InputSchema[];
  private onSubmit: (...args: any) => any;
  private options: any = {};

  constructor(
    formSchema: RazorWindProps.Formaker.InputSchema[],
    onSubmit: (...args: any) => any,
    options?: any
  ) {
    this.inputSchema = formSchema;
    this.onSubmit = onSubmit;
    this.options = options;
  }

  public Component = () => {
    const initialValues = this.parseInputSchemaToFormikInitialValues();

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.onSubmit}
      >
        {(helpers) => (
          <Form {...this.options?.form} onSubmit={helpers.handleSubmit}>
            {this.renderInputSchema(this.inputSchema, helpers)}
            <Button role="primary" type="submit" rounded>{this.options?.submitLabel || 'Save'}</Button>
          </Form>
        )}
      </Formik>
    );
  }

  private renderInputSchema = (inputs: RazorWindProps.Formaker.InputSchema[] = this.inputSchema, formikHelpers?: FormikProps<any>) => {
    return inputs
      .map((input, i: number) => {
        switch (input.type) {
          case 'group':
            switch (input.group) {
              case 'field':
                if (!(input.fieldGroupItem == null)) {
                  return (
                    <FieldGroup>
                      {this.renderFieldGroupInputSchema(input, formikHelpers)}
                    </FieldGroup>
                  );
                }
                else {
                  this.errorMsg('no-field-group-item', i);
                  return this.renderInputError(i);
                }
              case 'form':
                if (!(input.formGroupItem == null)) {
                  return (
                    <FormGroup>
                      {this.renderFormGroupInputSchema(input.formGroupItem, formikHelpers)}
                    </FormGroup>
                  );
                }
                else {
                  this.errorMsg('no-form-group-item', i);
                  return this.renderInputError(i);
                }
              default:
                this.errorMsg('group-type-invalid', i);
                return this.renderInputError(i);
            }
          case 'field':
            return (
              <FormikField
                name={input.name}
              >
                {(fieldHelper) => (
                  <Field
                    {...input.option}
                    label={input.label}
                    name={input.name}
                    value={formikHelpers.values[input.name]}
                    onChange={formikHelpers.handleChange(input.name)}
                  />
                )}
              </FormikField>
            );
          case 'textarea':
            return (
              <FormikField
                name={input.name}
              >
                {(fieldHelper) => (
                  <FieldArea
                    {...input.option}
                    label={input.label}
                    name={input.name}
                    value={formikHelpers.values[input.name]}
                    onChange={formikHelpers.handleChange(input.name)}
                  />
                )}
              </FormikField>
            );
          case 'select':
            return (
              <FormikField
                name={input.name}
              >
                {(fieldHelper) => (
                  <Select
                    {...input.option}
                    label={input.label}
                    name={input.name}
                    value={formikHelpers.values[input.name]}
                    onChange={formikHelpers.handleChange(input.name)}
                    options={input.option.options}
                  />
                )}
              </FormikField>
            );
          case 'checkbox':
            return (
              <FormikField
                name={input.name}
              >
                {(fieldHelper) => (
                  <Checkbox
                    {...input.option}
                    label={input.label}
                    name={input.name}
                    checked={formikHelpers.values[input.name]}
                    onChange={formikHelpers.handleChange(input.name)}
                  />
                )}
              </FormikField>
            );
          case 'radio':
            return (
              <FormikField
                name={input.name}
              >
                {(fieldHelper) => (
                  <Radio
                    {...input.option}
                    label={input.label}
                    name={input.name}
                    checked={formikHelpers.values[input.name]}
                    onChange={formikHelpers.handleChange(input.name)}
                  />
                )}
              </FormikField>
            );
          case 'autocomplete':
            return (
              <FormikField>
                {(fieldHelper) => (
                  <AutoComplete
                    {...input.option}
                    label={input.label}
                    name={input.name}
                    source={input.autoCompleteSource}
                    onSelect={formikHelpers.handleChange(input.name)}
                  />
                )}
              </FormikField>
            );
          default:
            console.warn(`Formaker Index[${i}]: type="${input.type}" is invalid.`);
            return <React.Fragment></React.Fragment>
        }
      });
  }

  private renderFieldGroupInputSchema = (input: RazorWindProps.Formaker.InputSchema, formikHelpers?: FormikProps<any>) => {
    const parser = (items: RazorWindProps.Formaker.FieldGroupItemInputSchema[] = []) => {
      return items.map(item => {
        if (item.type === 'button') {
          return <FieldGroup.Button {...item.buttonOption}>{item.content}</FieldGroup.Button>
        }
        else {
          return <FieldGroup.Addons>{item.content}</FieldGroup.Addons>
        }
      });
    }
    const left = parser(input.fieldGroupItem.left);
    const right = parser(input.fieldGroupItem.right);

    return [
      ...left, (
        <FormikField>
          {(fieldHelper) => (
            <Field
              {...input.option}
              label={input.label}
              name={input.name}
              value={formikHelpers.values[input.name]}
              onChange={formikHelpers.handleChange(input.name)}
            />
          )}
        </FormikField>
      ),
      ...right
    ];
  }

  private renderFormGroupInputSchema = (inputs: RazorWindProps.Formaker.FormGroupItemInputSchema[], formikHelpers?: FormikProps<any>) => {
    return inputs
      .map((input, i: number) => {
        switch (input.type) {
          case 'field':
            return (
              <FormikField
                name={input.name}
              >
                {(fieldHelper) => (
                  <Field
                    {...input.option}
                    label={input.label}
                    name={input.name}
                    value={formikHelpers.values[input.name]}
                    onChange={formikHelpers.handleChange(input.name)}
                  />
                )}
              </FormikField>
            );
          case 'checkbox':
            return (
              <FormikField
                name={input.name}
              >
                {(fieldHelper) => (
                  <Checkbox
                    {...input.option}
                    label={input.label}
                    name={input.name}
                    checked={formikHelpers.values[input.name]}
                    onChange={formikHelpers.handleChange(input.name)}
                  />
                )}
              </FormikField>
            );
          case 'radio':
            return (
              <FormikField
                name={input.name}
              >
                {(fieldHelper) => (
                  <Radio
                    {...input.option}
                    label={input.label}
                    name={input.name}
                    checked={formikHelpers.values[input.name]}
                    onChange={formikHelpers.handleChange(input.name)}
                  />
                )}
              </FormikField>
            );
          default:
            return <React.Fragment></React.Fragment>
        }
      });
  }

  private renderInputError = (index: number, reason: string = "") => {
    return <div className="text-red-500" title={reason}>[{index}] Formaker failed to display an input.</div>
  }

  private errorMsg = (type: string, index: number) => {
    let message = `==== Formaker Error ====\nFormaker failed to create input with index [${index}]: `;

    switch (type) {
      case 'group-type-invalid':
        message += '`group` is invalid or undefined';
        break;
      case 'no-field-group-item':
        message += 'Using `FieldGroup`, Make sure to define `fieldGroupItem`.';
        break;
      case 'no-form-group-item':
        message += 'Using `FormGroup`, Make sure to define `formGroupItem`.';
        break;
      default:
        message += 'Unknown error.';
        break;
    }

    console.error(message);
  }

  private parseInputSchemaToFormikInitialValues = () => {
    const initialValues = {};
    this.inputSchema.forEach((input) => {
      if ((input.type === 'group' && input.group === 'form')) {
        input.formGroupItem.forEach((groupInput) => {
          if (groupInput.name) {
            initialValues[groupInput.name] = '';
          }
        });
      }
      else {
        if (input.name) {
          initialValues[input.name] = '';
        }
      }
    });

    console.log(initialValues);

    return initialValues;
  }

}

export default Formaker;
