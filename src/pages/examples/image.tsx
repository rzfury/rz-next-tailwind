import React from "react";
import Image from "next/image";
import Layout from "../../layout/layout";

export default class ExampleImgPage extends React.Component {
  render() {
    return (
      <Layout>
        <Image src="/img/img.jpg" width="3840" height="2160" />
        <div style={{ height: 1200 }}></div>
      </Layout>
    )
  }
}
