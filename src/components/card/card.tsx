import React from 'react';
import conclass from '../../utility/conclass';

function Card(props: RazorWindProps.Card.Card) {
  return (
    <div className={conclass('block rounded', props.shadow ? 'shadow-md' : 'border-solid border border-gray-400', props.asBody ? 'p-4' : '')}>
      {props.children}
    </div>
  );
}

export default Card;
