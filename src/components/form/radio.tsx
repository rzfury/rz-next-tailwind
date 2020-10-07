import React from 'react';

export default function Radio(props: RazorWindProps.Form.Radio) {
  return (
    <label className="form-radio">
      <span className="form-radio-control">
        <input type="radio" className="form-radio-input" name={props.name}/>
        <span className="form-radio-backdrop"></span>
        <span className="form-radio-icon"></span>
      </span>
      <span className="form-radio-label">{props.label}</span>
    </label>
  );
}
