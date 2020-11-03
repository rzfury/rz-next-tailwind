import React from 'react';
import conclass from '../../utility/conclass';

function Card(props: RazorWindProps.Card.Card) {
  return (
    <div className={conclass('block rounded', props.shadow ? 'shadow-md' : 'border-solid border border-gray-300')}>
      {renderSimpleTitle(props.title)}
      {props.asBody
        ? <div className="p-4">{props.children}</div>
        : props.children
      }
      {renderSimpleTitle(props.footer, true)}
    </div>
  );
}

const renderSimpleTitle = (props: any, isFooter?: boolean) => {
  if (props.content) {
    return (
      <div className={conclass('bg-gray-200 p-4', isFooter ? 'rounded-b' : 'rounded-t', props.shadow ? '' : 'border-b border-gray-300')}>{props.content}</div>
    );
  }
  else {
    return <></>;
  }
};

export default Card;
