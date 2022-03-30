import React from "react";

const LinkComponent = ({ props }) => {
  const { url, text } = props;

  return (
    <a href={url} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
};

export default LinkComponent;
