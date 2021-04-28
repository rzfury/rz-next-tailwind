import React from 'react';

export default function Select(props: RZNTProps.Form.Select) {
  return (
    <div className="block">
      <label className="text-gray-600">{props.label}</label>
      <select
        {...props}
        className="form-select"  
      >{(
        props.options.map(
          option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          )
        )
      )}</select>
    </div>
  );
}
