import React from 'react';

export default function CardHeading(props: { children?: React.ReactNode }) {
  return (
    <div className="block w-full border-b border-solid border-gray-400 px-4 py-3">
      {this.props.children}
    </div>
  );
}
