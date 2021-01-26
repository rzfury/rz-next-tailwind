import React from 'react';
import conclass from '../../../utility/conclass';

class Card extends React.Component<RZNTProps.Card, any> {
  public static Body = (props: RZNTProps.Card.Body) => {
    return (
      <div {...props} className={conclass('p-4', props.className)}>{props.children}</div>
    );
  }

  public static Heading = (props: RZNTProps.Card.Heading) => {
    return (
      <div {...props} className={conclass('bg-gray-200 p-4 rounded-t', props.shadow ? 'shadow-sm' : 'border-b border-gray-300', props.className)}>{props.children}</div>
    );
  }

  renderSimpleTitle = (content: string, isFooter?: boolean) => {
    if (content) {
      return (
        <div className={conclass('bg-gray-200 p-4', isFooter ? 'rounded-b' : 'rounded-t', this.props.shadow ? 'shadow-sm' : 'border-b border-gray-300')}>{content}</div>
      );
    }
    else {
      return <></>;
    }
  };

  render() {
    return (
      <div className={conclass('block rounded', this.props.shadow ? 'shadow-md' : 'border-solid border border-gray-300', this.props.className)}>
        {this.renderSimpleTitle(this.props.title)}
        {this.props.children}
      </div>
    );
  }
}

export default Card;
