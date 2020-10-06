import React from 'react';

interface FieldProps {
  /** @type Container Class Name */
  className?: string;
  /** @type Input Attributes */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  /** @type Label Attributes */
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  /** @type Label Children or Label Text */
  label?: string | JSX.Element;
  /** @type Input Name */
  name?: string;
  /** @type Input OnChange Event */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Field(props: FieldProps) {
  const [hasValue, setHasValue] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(event.target.value.length > 0);
    props.onChange && props.onChange(event);
  };

  return (
    <div className={'form-text' + (props.className ? (' ' + props.className) : '')}>
      <label
        {...props.labelProps}
        className={
          'form-text-label' +
          (hasValue ? ' input-has-value text-sm bg-white px-2' : ' top-50')
        }
      >{props.label}</label>
      <input
        {...props.inputProps}
        className={
          'form-text-input' +
          (props.inputProps?.className ? (' ' + props.inputProps.className) : '')
        }
        name={props.name}
        onChange={handleChange}
      />
    </div>
  );
}
