import React from "react";
import { Button } from "antd";

const ButtonComponent = ({ props }) => {
  const { text } = props;

  const handleClick = () => {
    console.log("On button click!");
  };

  return (
    <Button type="primary" onClick={handleClick}>
      {text}
    </Button>
  );
};

export default ButtonComponent;
