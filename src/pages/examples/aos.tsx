import React from "react";
import Layout from "../../layout/layout";
import { withAos } from "../../components/hoc/with-aos";

class ExampleAOS extends React.Component {
  render() {
    return (
      <Layout>
        <div className="p-5">
          <span className="text-gray-700 text-2xl">TailwindCSS - Animate on Scroll</span>
          <hr className="my-5" />
          <div className="flex justify-center" style={{ height: '1200px' }}>
            <div className="inline-block">Scroll</div>
          </div>
          <div
            data-aos="fade-up"
            className="flex items-center justify-center h-40 m-10 bg-blue-400"
          >
            Example
          </div>
        </div>
      </Layout>
    )
  }
}

export default withAos(ExampleAOS);
