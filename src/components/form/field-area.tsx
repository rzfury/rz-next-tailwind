import React from 'react';

interface FieldAreaProps {
  /** @type Container Class Name */
  className?: string;
  /** @type Input Attributes */
  textareaProps?: React.InputHTMLAttributes<HTMLTextAreaElement>;
  /** @type Label Attributes */
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  /** @type Label Children or Label Text */
  label?: string | JSX.Element;
  /** @type Input Name */
  name?: string;
  /** @type Input Value */
  value?: string;
  /** @type Input OnChange Event */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function FieldArea(props: FieldAreaProps) {
  const [hasValue, setHasValue] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHasValue(event.target.value.length > 0);
    props.onChange && props.onChange(event);
  };

  return (
    <div className={'form-textarea' + (props.className ? (' ' + props.className) : '')}>
      <label
        {...props.labelProps}
        className={
          'form-text-label' +
          (hasValue ? ' input-has-value text-sm bg-white px-2' : '')
        }
      >{props.label}</label>
      <textarea
        {...props.textareaProps}
        className={
          'form-text-input' +
          (props.textareaProps?.className ? (' ' + props.textareaProps.className) : '')
        }
        name={props.name}
        onChange={handleChange}
      >
        {props.value}
      </textarea>
    </div>
  );
}
