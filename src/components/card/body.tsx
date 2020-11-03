import React from 'react';

export default function CardBody(props: { children?: React.ReactNode }) {
  return (
    <div className="p-4">
      {props.children}
    </div>
  );
}
