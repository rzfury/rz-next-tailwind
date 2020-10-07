import React from 'react';
import conclass from '../../utility/conclass';

export default function Radio(props: RazorWindProps.Form.Radio) {
  return (
    <label {...props.containerProps} className={conclass('form-radio', props.containerProps?.className)}>
      <span className="form-radio-control">
        <input {...props} type="radio" name={props.name} className="form-radio-input"/>
        <span className={conclass('form-radio-backdrop', props.backdropClassName)}></span>
        <span className={conclass('form-radio-icon', props.iconClassName)}></span>
      </span>
      <span className={conclass('form-radio-label', props.labelClassName)}>{props.label}</span>
    </label>
  );
}
