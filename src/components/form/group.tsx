import React from 'react';

export default function FormGroup(props: RazorWindProps.Form.Group) {
  return <div className="form-group">{props.children}</div>;
}
