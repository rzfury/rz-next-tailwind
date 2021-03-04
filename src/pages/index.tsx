import React from "react";
import Link from 'next/link';
import Card from "../components/common/card/card";
import Layout from "../layout/layout";

export default class Index extends React.Component {
  examples: any = [
    {
      link: 'aos',
      label: 'Animate on Scroll'
    },
    {
      link: 'button',
      label: 'Button'
    },
    {
      link: 'card',
      label: 'Card'
    },
    {
      link: 'dropdown',
      label: 'Dropdown'
    },
    {
      link: 'form-control',
      label: 'Form Control'
    },
    {
      link: 'modal',
      label: 'Modal'
    },
    {
      link: 'snackbar',
      label: 'Snackbar'
    },
  ];

  renderExamples = () => {
    const childs = this.examples.map(
      (value: any, i: number) => {
        if (i % 2 == 0) {
          return (
            <Link href={`./examples/${value.link}`} passHref>
              <a className="px-4 py-2 block bg-gray-200 hover:bg-gray-300">
                <span>{value.label}</span>
              </a>
            </Link>
          );
        }
        else {
          return (
            <Link href={`./examples/${value.link}`} passHref>
              <a className="px-4 py-2 block bg-white hover:bg-gray-300">
                <span>{value.label}</span>
              </a>
            </Link>
          );
        }
      }
    );

    return (
      <div className="border-t border-gray-400">
        {childs}
      </div>
    );
  }

  render() {
    return (
      <Layout>
        <div className="py-20">
          <h1 className="text-5xl text-center text-accent-1">
            Next.js + Tailwind CSS
          </h1>
        </div>
        <div className="mx-5 sm:w-1/2 sm:mx-auto">
          <Card>
            <h1 className="text-2xl font-semibold pl-4 py-2">
              Examples
            </h1>
            {/* Accordion Link, future feature */}
            {this.renderExamples()}
          </Card>
        </div>
      </Layout>
    )
  }
}
