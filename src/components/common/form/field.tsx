import React from 'react';
import conclass from '../../../utility/conclass';

export default function Field(props: RazorWindProps.Form.Field) {
  const [hasValue, setHasValue] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(event.target.value.length > 0);
    props.onChange && props.onChange(event);
  };

  return (
    <div className={conclass('form-text', props.className)}>
      { props.labelFloat
        ? (
          <label
            {...props.labelProps}
            className={conclass('form-text-label', hasValue ? ' input-has-value text-sm bg-white px-2' : ' top-50')}
          >{props.label}</label>
        )
        : (<label className="text-gray-600">{props.label}</label>)
      }
      <input
        {...props.inputProps}
        className={conclass('form-text-input', props.inputProps?.className)}
        name={props.name}
        onChange={handleChange}
        disabled={props.disabled}
        readOnly={props.readonly}
      />
    </div>
  );
}
