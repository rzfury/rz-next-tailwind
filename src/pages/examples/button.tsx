import React, { Component } from 'react';
import Layout from '../../layout/layout';
import Button from '../../components/common/button';
import { Checkbox, Radio } from '../../components/common/form';

export default class ExampleButton extends Component<{}, any> {
  constructor(props) {
    super(props);

    this.state = {
      block: false,
      rounded: false,
      outline: false,
      disabled: false,
      variant: 'default'
    };
  }

  onVariant = (variant: string) => {
    return () => this.setState({ variant });
  }

  onChanged = (state: string) => {
    return ({ target }) => this.setState({ [state]: target.checked });
  }

  render() {
    const { block, rounded, outline, disabled, variant } = this.state;

    return (
      <Layout>
        <div className="p-5">
          <span className="text-gray-700 text-2xl">TailwindCSS - Button</span>
          <hr className="my-5" />

          <div className="flex flex-col gap-y-2 mb-5">
            <div>Variants: </div>
            <div className="flex gap-x-4">
              <Radio label="Default" name="variant" onChange={this.onVariant('default')} checked={variant === 'default'}/>
              <Radio label="Primary" name="variant" onChange={this.onVariant('primary')} checked={variant === 'primary'}/>
              <Radio label="Danger" name="variant" onChange={this.onVariant('danger')} checked={variant === 'danger'}/>
            </div>
          </div>

          <div className="flex flex-col gap-y-2 mb-5">
            <div>Configs: </div>
            <div className="flex gap-x-4">
              <Checkbox label="Block" onChange={this.onChanged('block')} />
              <Checkbox label="Rounded" onChange={this.onChanged('rounded')} />
              <Checkbox label="Outline" onChange={this.onChanged('outline')} />
              <Checkbox label="Disabled" onChange={this.onChanged('disabled')} />
            </div>
          </div>

          <div className="block">
            <Button block={block} rounded={rounded} outline={outline} disabled={disabled} role={variant}>Default</Button>
          </div>
        </div>
      </Layout>
    );
  }
}
