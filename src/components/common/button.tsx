import React from 'react';
import conclass from '../../utility/conclass';

export default function Button(props: RZNTProps.Button) {
  const c = (a: boolean, b: string) => a ? b : '';
  return <button {...props} className={conclass('btn', 'btn-'+props.role, c(props.block, 'btn-block'), c(props.rounded, 'rounded'), c(props.outline, 'btn-outline'), props.className)}>{props.children}</button>;
}
