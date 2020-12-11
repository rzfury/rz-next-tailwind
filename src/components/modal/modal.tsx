import React from 'react';

import Card from '../card/card';
import conclass from '../../utility/conclass';

class Modal extends React.Component<RazorWindProps.Modal, RazorWindStates.Modal> {
  constructor(props: RazorWindProps.Modal) {
    super(props);

    this.state = {
      show: false,
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleEscapeKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscapeKey);
    document.body.classList.remove('overflow-hidden');
  }

  componentDidUpdate() {
    if(this.props.show) {
      document.body.classList.add('overflow-hidden');
    }
    else {
      document.body.classList.remove('overflow-hidden');
    }
  }

  handleEscapeKey = (e: KeyboardEvent) => {
    if(e.key === 'Escape' && this.props.show) {
      e.preventDefault();
      this.props.onHide();
    }
  }

  render() {
    return (
      <div className={conclass('modal', this.props.show ? 'modal-show' : 'modal-hide')}>
        <div className="modal-backdrop" onClick={this.props.onHide}></div>
        <div className="modal-dialog">
          <Card shadow className="modal-card">
            <Card.Heading className="modal-card-head">
            <div className="flex justify-between">
              <span>{this.props.title || 'Modal Title'}</span>
              <button className="py-2 px-4 text-2xl -m-4" onClick={this.props.onHide}>&times;</button>
            </div>
            </Card.Heading>
            <Card.Body className="modal-card-body">
              {this.props.children}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
} 

export default Modal;
