import React from "react";

const ParagraphComponent = ({ props }) => {
  const { text } = props;
  return <p>{text}</p>;
};

export default ParagraphComponent;
