import React from "react";

const BoxComponent = ({ props, children }) => {
  const styles = {
    borderSize: "1px",
    borderStyle: "solid",
    borderColor: "red",
  };
  for (const key in props) styles[key] = props[key];

  return <div style={styles}>{children}</div>;
};

export default BoxComponent;
