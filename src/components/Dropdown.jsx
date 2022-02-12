import React from "react";

import { ReactComponent as IconArrow } from "../images/icon-arrow.svg";

const Dropdown = ({ children }) => {
  console.log(children);

  let title, answer;

  children.forEach((e) => {
    if (e.props.className === "question") {
      title = e.props.children;
    } else if (e.props.className === "answer") {
      answer = e.props.children;
    }
  });

  console.log(title, answer);
  return (
    <div className="dropdown">
      <button>
        <p>{title}</p>

        <IconArrow />
      </button>
      <div className="content">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Dropdown;
