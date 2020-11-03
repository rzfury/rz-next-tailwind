import React from 'react';
import conclass from '../../utility/conclass';

class Card extends React.Component<RazorWindProps.Card.Card, {}> {
  renderSimpleTitle = (content: any, isFooter?: boolean) => {
    if (content) {
      return (
        <div className={conclass('bg-gray-200 p-4', isFooter ? 'rounded-b' : 'rounded-t', this.props.shadow ? '' : 'border-b border-gray-300')}>{content}</div>
      );
    }
    else {
      return <></>;
    }
  }

  render() {
    return (
      <div className={conclass('block rounded', this.props.shadow ? 'shadow-md' : 'border-solid border border-gray-300')}>
        {this.renderSimpleTitle(this.props.title)}
        {this.props.asBody
          ? <div className="p-4">{this.props.children}</div>
          : this.props.children
        }
        {this.renderSimpleTitle(this.props.footer, true)}
      </div>
    );
  }
}

export default Card;
