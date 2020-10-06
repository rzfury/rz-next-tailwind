import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { label: string, value: string }[];
}

export default function Select(props: SelectProps) {
  return (
    <select
      {...props}
      className="form-select"  
    >{(
      props.options.map(
        option => (
          <option value={option.value}>{option.label}</option>
        )
      )
    )}</select>
  );
}
