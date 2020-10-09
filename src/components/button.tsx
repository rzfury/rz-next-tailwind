import React from 'react';
import conclass from '../utility/conclass';

export default function Button(props: RazorWindProps.Button) {
  return <button {...props} className={conclass('btn', 'btn-'+props.role, props.block && 'btn-block', props.rounded && 'rounded', props.outline && 'btn-outline', props.className)}>{props.children}</button>;
}
