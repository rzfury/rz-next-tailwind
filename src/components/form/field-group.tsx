import React from 'react';

class FieldGroup extends React.Component<RazorWindProps.Form.FieldGroup, {}> {
  public static Left = (props: RazorWindProps.Form.FieldGroup.Left) => {
    return (
      <div {...props} className="form-fieldgroup-left">{props.children}</div>
    );
  };

  public static Right = (props: RazorWindProps.Form.FieldGroup.Right) => {
    return (
      <div {...props} className="form-fieldgroup-right">{props.children}</div>
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
