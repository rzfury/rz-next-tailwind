import React from 'react';

import Card from '../card/card';
import conclass from '../../utility/conclass';

class Modal extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      show: false,
    }
  }

  render() {
    return (
      <div className={conclass('modal', this.props.show ? 'modal-show' : 'modal-hide')}>
        <div className="modal-backdrop" onClick={this.props.onHide}></div>
        <div className="modal-dialog">
          <Card>
            <Card.Heading>
            <div className="flex justify-between">
              <span>{this.props.title || 'Modal Title'}</span>
              <button className="py-2 px-4 text-2xl -m-4" onClick={this.props.onHide}>&times;</button>
            </div>
            </Card.Heading>
            <Card.Body>
              {this.props.children}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
} 

export default Modal;
