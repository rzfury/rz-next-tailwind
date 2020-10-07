import React from 'react';
import conclass from '../../utility/conclass';

class Card extends React.Component<RazorWindProps.Card.Card, any> {
  render() {
    return (
      <div
        className={
          conclass(
            'block rounded',
            this.props.shadow
            ? 'shadow-md'
            : 'border-solid border border-gray-400',
            this.props.asBody ? 'p-4' : ''
          )
        }
      >
        {this.props.children}
      </div>
    );
  }
}

export default Card;
