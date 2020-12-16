import React from 'react';

export default function CardFooter(props: { children?: React.ReactNode }) {
  return (
    <div className="block w-full border-t border-solid border-gray-400 px-4 py-3">
      {props.children}
    </div>
  );
}
