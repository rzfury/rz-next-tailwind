import React from 'react';
import { withRouter } from 'next/router';
import { withTranslation } from 'react-i18next';

export function withTL(WrappedComponent: any) {
  return withTranslation()(
    withRouter(
      class extends React.Component<any, any> {
        constructor(props: any) {
          super(props);

          this.props.i18n.changeLanguage(this.props.router.locale);
        }
    
        render() {
          return <WrappedComponent {...this.props} />;
        }
      }
    )
  )
};
