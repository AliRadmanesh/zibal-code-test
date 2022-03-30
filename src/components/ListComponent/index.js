import React from "react";

const ListComponent = ({ props }) => {
  const { li } = props;
  return (
    <ul>
      {li.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ListComponent;
