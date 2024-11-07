import React, { useState } from "react";
import { Button, Modal } from "antd";

const ModalShowcase: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const showModal2 = () => {
    setOpen2(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleOk2 = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen2(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleCancel2 = () => {
    setOpen2(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with customized footer
      </Button>
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Submit
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Search on Google
          </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

      <Button type="primary" onClick={showModal2}>
        Open Modal with customized footer
      </Button>

      <Modal
        open={open2}
        title="Title"
        onOk={handleOk2}
        onCancel={handleCancel2}
        footer={[
          <Button key="back" type="text" onClick={handleCancel2}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk2}
          >
            Submit
          </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default ModalShowcase;
