import React from 'react';
import Card from '../../components/card/card';
import CardBody from '../../components/card/body';

export default function ExampleCard() {
  return (
    <div className="p-5">
      <span className="text-gray-700 text-2xl">TailwindCSS - Card</span>
      <hr className="my-5" />
      <Card shadow asBody>
        Card Body
      </Card>
    </div>
  );
}
