import React from 'react';

export default function FieldArea(props: RazorWindProps.Form.FieldArea) {
  const [hasValue, setHasValue] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHasValue(event.target.value.length > 0);
    props.onChange && props.onChange(event);
  };

  return (
    <div className={'form-textarea' + (props.className ? (' ' + props.className) : '')}>
      { props.labelFloat
        ? (
          <label
            {...props.labelProps}
            className={
              'form-text-label' +
              (hasValue ? ' input-has-value text-sm bg-white px-2' : ' top-50')
            }
          >{props.label}</label>
        )
        : (<label className="text-gray-600">{props.label}</label>)
      }
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
