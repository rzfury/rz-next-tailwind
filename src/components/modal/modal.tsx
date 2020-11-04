import React from 'react';
import * as icon from 'heroicons';

import Card from '../card/card';
import CardHeading from '../card/heading';
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
      <div className={conclass('modal ', this.props.show ? 'modal-show' : 'modal-hide')}>
        <div className="modal-backdrop"></div>
        <div className="modal-dialog">
          <Card>
            <CardHeading>

            </CardHeading>
            {this.props.children}
          </Card>
        </div>
      </div>
    );
  }
} 

export default Modal;
