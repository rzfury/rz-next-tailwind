import React from 'react';
import Button from '../../components/button';

export default function ExampleButton() {
  return (
    <div className="p-5">
      <span className="text-gray-700 text-2xl">TailwindCSS - Buttons</span>
      <hr className="my-5" />
      <div className="flex gap-x-2 mb-6">
        <Button role="primary">Primary</Button>
        <Button role="default">Default</Button>
        <Button role="danger">Danger</Button>
        <Button disabled role="primary">Primary</Button>
        <Button disabled role="default">Default</Button>
        <Button disabled role="danger">Danger</Button>
      </div>
      <div className="flex gap-x-2 mb-6">
        <Button outline role="primary">Primary</Button>
        <Button outline role="default">Default</Button>
        <Button outline role="danger">Danger</Button>
        <Button disabled outline role="primary">Primary</Button>
        <Button disabled outline role="default">Default</Button>
        <Button disabled outline role="danger">Danger</Button>
      </div>
      <div className="flex gap-x-2 mb-6">
        <Button rounded role="primary">Primary</Button>
        <Button rounded role="default">Default</Button>
        <Button rounded role="danger">Danger</Button>
        <Button disabled rounded role="primary">Primary</Button>
        <Button disabled rounded role="default">Default</Button>
        <Button disabled rounded role="danger">Danger</Button>
      </div>
      <div className="flex gap-x-2 mb-6">
        <Button rounded outline role="primary">Primary</Button>
        <Button rounded outline role="default">Default</Button>
        <Button rounded outline role="danger">Danger</Button>
        <Button disabled rounded outline role="primary">Primary</Button>
        <Button disabled rounded outline role="default">Default</Button>
        <Button disabled rounded outline role="danger">Danger</Button>
      </div>
      <div className="gap-y-2 mb-6">
        <Button block role="primary" className="mb-4">Primary</Button>
        <Button block role="default" className="mb-4">Default</Button>
        <Button block role="danger" className="mb-4">Danger</Button>
        <Button disabled block role="primary" className="mb-4">Primary</Button>
        <Button disabled block role="default" className="mb-4">Default</Button>
        <Button disabled block role="danger" className="mb-4">Danger</Button>
      </div>
      <div className="gap-y-2">
        <Button block outline role="primary" className="mb-4">Primary</Button>
        <Button block outline role="default" className="mb-4">Default</Button>
        <Button block outline role="danger" className="mb-4">Danger</Button>
        <Button disabled block outline role="primary" className="mb-4">Primary</Button>
        <Button disabled block outline role="default" className="mb-4">Default</Button>
        <Button disabled block outline role="danger" className="mb-4">Danger</Button>
      </div>
      <div className="gap-y-2 mb-6">
        <Button rounded block role="primary" className="mb-4">Primary</Button>
        <Button rounded block role="default" className="mb-4">Default</Button>
        <Button rounded block role="danger" className="mb-4">Danger</Button>
        <Button disabled rounded block role="primary" className="mb-4">Primary</Button>
        <Button disabled rounded block role="default" className="mb-4">Default</Button>
        <Button disabled rounded block role="danger" className="mb-4">Danger</Button>
      </div>
      <div className="gap-y-2">
        <Button rounded block outline role="primary" className="mb-4">Primary</Button>
        <Button rounded block outline role="default" className="mb-4">Default</Button>
        <Button rounded block outline role="danger" className="mb-4">Danger</Button>
        <Button disabled rounded block outline role="primary" className="mb-4">Primary</Button>
        <Button disabled rounded block outline role="default" className="mb-4">Default</Button>
        <Button disabled rounded block outline role="danger" className="mb-4">Danger</Button>
      </div>
    </div>
  );
}
