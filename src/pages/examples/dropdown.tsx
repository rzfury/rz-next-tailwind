import React from "react";
import Dropdown from "../../components/common/dropdown";
import Layout from "../../layout/layout";

export default class Index extends React.Component {
  
  render() {
    return (
      <Layout>
        <Dropdown
          label="Dropdown"
          triggerProps={{ role: 'primary' }}
          links={[{ label: 'aaaaaa', href: '#' }]}
        />
      </Layout>
    )
  }
}
