import React from "react";

const H1Component = ({ props }) => {
  const { text } = props;
  return <h1>{text}</h1>;
};

export default H1Component;
