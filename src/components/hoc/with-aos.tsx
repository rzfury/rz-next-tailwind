import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function withAos(WrappedComponent: any, aosConfig?: AOS.AosOptions) {
  return class extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
    }

    componentDidMount() {
      AOS.init(aosConfig);
    }

    render() {
      return <WrappedComponent {...this.props}/>;
    }
  }
}
