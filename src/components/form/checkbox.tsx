import React from 'react';
import conclass from '../../utility/conclass';

export default function Checkbox(props: RazorWindProps.Form.Checkbox) {
  return (
    <label {...props.containerProps} className={conclass('form-checkbox', props.containerProps?.className)}>
      <span className="form-checkbox-control">
        <input {...props} type="checkbox" className="form-checkbox-input"/>
        <span className={conclass('form-checkbox-backdrop', props.backdropClassName)}></span>
        <span className={conclass('form-checkbox-icon', props.iconClassName)}>
          <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 17.837 17.837" >
            <g>
              <path id="checkmark" d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27 c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0
              L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"/>
            </g>
          </svg>
        </span>
      </span>
      <span className={conclass('form-checkbox-label', props.labelClassName)}>{props.label}</span>
    </label>
  );
}
