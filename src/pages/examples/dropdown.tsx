import React from "react";
import Dropdown from "../../components/common/dropdown";
import Layout from "../../layout/layout";

export default class Index extends React.Component {
  dropdownLinks: any = [
    {
      label: 'Action 1',
      href: '#'
    },
    {
      label: 'Action 2',
      href: '#'
    },
    {
      label: 'Other action, long text',
      href: '#'
    },
  ];

  render() {
    return (
      <Layout>
        <div className="p-5">
          <span className="text-gray-700 text-2xl">TailwindCSS - Dropdown</span>
          <hr className="my-5" />
          <Dropdown
            label="Dropdown"
            triggerProps={{ role: 'primary' }}
            links={this.dropdownLinks}
          />
        </div>
      </Layout>
    )
  }
}
