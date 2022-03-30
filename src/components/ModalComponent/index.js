import React, { useState } from "react";
import { Modal } from "antd";

const ModalComponent = ({ props, children }) => {
  const { isOpen = false, width = 520, height = 220 } = props;
  const [isModalVisible, setIsModalVisible] = useState(isOpen);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      title="Basic Modal"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={width}
      bodyStyle={{ height }}
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
