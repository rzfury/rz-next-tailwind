import React from 'react';
import Button from '../components/button';

export default function ExampleButton() {
  return (
    <div className="p-5">
      <span className="text-gray-700 text-2xl">TailwindCSS - Buttons</span>
      <hr className="my-5" />
      <div className="flex gap-x-2 mb-6">
        <Button role="primary">Primary</Button>
        <Button role="default">Default</Button>
        <Button role="danger">Danger</Button>
      </div>
      <div className="flex gap-x-2 mb-6">
        <Button outline role="primary">Primary</Button>
        <Button outline role="default">Default</Button>
        <Button outline role="danger">Danger</Button>
      </div>
      <div className="flex gap-x-2 mb-6">
        <Button rounded role="primary">Primary</Button>
        <Button rounded role="default">Default</Button>
        <Button rounded role="danger">Danger</Button>
      </div>
      <div className="flex gap-x-2 mb-6">
        <Button rounded outline role="primary">Primary</Button>
        <Button rounded outline role="default">Default</Button>
        <Button rounded outline role="danger">Danger</Button>
      </div>
      <div className="flex gap-y-2 mb-6">
        <Button block role="primary">Primary</Button>
        <Button block role="default">Default</Button>
        <Button block role="danger">Danger</Button>
      </div>
      <div className="flex gap-y-2">
        <Button block outline role="primary">Primary</Button>
        <Button block outline role="default">Default</Button>
        <Button block outline role="danger">Danger</Button>
      </div>
    </div>
  );
}
