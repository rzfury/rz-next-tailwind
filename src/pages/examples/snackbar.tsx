import React from "react";

import Layout from "../../layout/layout";
import Button from "../../components/common/button";
import Snackbar from "../../components/common/snackbar";

export default class ExampleSnackbar extends React.Component {
  snackbarRef = React.createRef<Snackbar>();
  
  addAlert = () => {
    this.snackbarRef.current.add(new Date().toUTCString());
  };

  render() {
    return (
      <Layout>
        <div className="p-5">
          <span className="text-gray-700 text-2xl">TailwindCSS - Snackbar alert</span>
          <hr className="my-5" />
          <Button role="default" onClick={this.addAlert}>Add Alert</Button>
        </div>
        <Snackbar ref={this.snackbarRef}/>
      </Layout>
    )
  }
}
