import React from 'react';

export default class CardHeading extends React.Component {
  render() {
    return (
      <div className="block w-full border-b border-solid border-gray-400 px-4 py-3">
        {this.props.children}
      </div>
    );
  }
}
