import React from 'react';

export default function Checkbox(props: RazorWindProps.Form.Checkbox) {
  return (
    <label className="form-checkbox">
      <span className="form-checkbox-control">
        <input type="checkbox" className="form-checkbox-input"/>
        <span className="form-checkbox-backdrop"></span>
        <span className="form-checkbox-icon">
          <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 17.837 17.837" >
            <g>
              <path id="checkmark" d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27 c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0
              L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"/>
            </g>
          </svg>
        </span>
      </span>
      <span className="form-checkbox-label">{props.label}</span>
    </label>
  );
}
