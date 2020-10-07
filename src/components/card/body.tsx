import React from 'react';

export default class CardBody extends React.Component {
  render() {
    return (
      <div className="p-4">
        {this.props.children}
      </div>
    );
  }
}
