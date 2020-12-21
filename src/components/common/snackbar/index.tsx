import React from 'react';
import Alert from './alert';

export default class Snackbar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      elements: []
    };
  }

  public add = (text?: string) => {
    const { elements } = this.state;
    elements.push(this.createAlert(text));
    this.setState({ elements });
  }

  createAlert = (title: string) => {
    return <Alert title={title}/>;
  }

  render() {
    return (
      <div className="fixed flex flex-col bottom-0 left-0 px-12 py-10 z-100 pointer-events-none">
        {this.state.elements}
      </div>
    );
  }
}
