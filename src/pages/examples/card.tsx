import React from 'react';
import Card from '../../components/card/card';

export default function ExampleCard() {
  return (
    <div className="p-5">
      <span className="text-gray-700 text-2xl">TailwindCSS - Card</span>
      <hr className="my-5" />
      <Card>
        Card plain
      </Card>
      <br/>
      <Card asBody>
        Card Body
      </Card>
      <br/>
      <Card shadow asBody>
        Card Body + Shadow
      </Card>
      <br/>
      <Card asBody title="Simple title">
        Card Body + Simple Title
      </Card>
      <br/>
      <Card shadow asBody title="Simple title">
        Card Body + Shadow + Simple Title
      </Card>
      <br/>
      <Card shadow asBody title="Simple title" footer="Simple Footer">
        Card Body + Shadow + Simple Title + Simple Footer
      </Card>
    </div>
  );
}
