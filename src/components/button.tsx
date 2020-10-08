import React from 'react';
import conclass from '../utility/conclass';

export default function Button(props: RazorWindProps.Button) {
  const role = (() => {
    switch(props.role) {
      case 'danger': return conclass(props.outline ? 'border-red-500 text-red-500' : 'bg-red-500 text-white', 'hover:bg-red-600 hover:border-transparent');
      case 'primary': return conclass(props.outline ? 'border-blue-500 text-blue-500' : 'bg-blue-500 text-white', 'hover:bg-blue-600 hover:border-transparent');
      case 'default':
      default: return conclass(props.outline ? 'border-gray-500 text-gray-500' : 'bg-gray-500 text-white', 'hover:bg-gray-600 hover:border-transparent');
    }
  })();
  return <button {...props} className={conclass('px-4 py-2', role, props.block && 'block w-full', props.rounded && 'rounded', props.outline && 'border border-solid hover:text-white', 'transition-color ease-out duration-100')}>{props.children}</button>;
}
