import React from 'react';
import Link from 'next/link';

import Layout from '../../layout/layout';
import Button from '../../components/button';
import Modal from '../../components/modal/modal';

export default function ExampleCard() {
  const [showModal, setModal] = React.useState(false);

  const handleShowModal = React.useCallback(() => {
    setModal(!showModal);
  }, [showModal]);

  return (
    <Layout>
      <div className="p-5">
        <span className="text-gray-700 text-2xl">TailwindCSS - Modal</span>
        <hr className="my-5" />
        <Button role="primary" onClick={handleShowModal}>Show Modal</Button>
        <Modal show={showModal} onHide={handleShowModal}>
          <Link href="/examples/card">Card example</Link>
        </Modal>
        <div style={{ height: '900px' }}></div>
      </div>
    </Layout>
  );
}
