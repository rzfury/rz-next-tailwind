import React from 'react';
import Layout from '../../layout/layout';
import Card from '../../components/common/card/card';

export default function ExampleCard() {
  return (
    <Layout>

      <div className="p-5">
        <span className="text-gray-700 text-2xl">TailwindCSS - Card</span>
        <hr className="my-5" />
        <Card>
          <Card.Body>
            Card with Body
        </Card.Body>
        </Card>
        <br />
        <Card>
          Card without Body
      </Card>
        <br />
        <Card shadow>
          <Card.Body>
            Card Shadow
        </Card.Body>
        </Card>
        <br />
        <Card title="Simple heading">
          <Card.Body>
            Card with Simple heading
        </Card.Body>
        </Card>
        <br />
        <Card shadow title="Simple heading">
          <Card.Body>
            Card Shadow with Simple heading
        </Card.Body>
        </Card>
        <br />
        <Card shadow>
          <Card.Heading className="bg-blue-800 text-white">
            <div className="flex justify-between">
              <span>Customizable heading</span>
              <button className="py-2 px-4 text-2xl" style={{ margin: '-1rem' }}>&times;</button>
            </div>
          </Card.Heading>
          <Card.Body>
            Card Shadow with Customizable heading
        </Card.Body>
        </Card>
      </div>
    </Layout>
  );
}
