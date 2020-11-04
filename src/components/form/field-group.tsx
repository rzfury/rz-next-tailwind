import React from 'react';
import Button from '../button';

class FieldGroup extends React.Component<RazorWindProps.Form.FieldGroup, {}> {
  public static Addons = (props: RazorWindProps.Form.FieldGroup.Addons) => {
    return (
      <div {...props} className="form-fieldgroup-addons">{props.children}</div>
    );
  };
  public static Button = (props: RazorWindProps.Button) => {
    return (
      <Button {...props} rounded={false}>{props.children}</Button>
    );
  };

  render() {
    return (
      <div {...this.props} className="form-fieldgroup">
        {this.props.children}
      </div>
    );
  }
}

export default FieldGroup;
