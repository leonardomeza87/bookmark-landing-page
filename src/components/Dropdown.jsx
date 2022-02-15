import React, { useState } from "react";

import { ReactComponent as IconArrow } from "../images/icon-arrow.svg";

const Dropdown = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  let title, answer;

  children.forEach((e) => {
    if (e.props.className === "question") {
      title = e.props.children;
    } else if (e.props.className === "answer") {
      answer = e.props.children;
    }
  });

  const handleClick = (e) => {
    if (!isActive) {
      setIsActive(true);
      e.target.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    } else {
      setIsActive(false);
    }
  };

  return (
    <div className={`dropdown ${isActive ? "active" : ""}`}>
      <button className="drop-question" onMouseUp={handleClick}>
        <p>{title}</p>

        <IconArrow />
      </button>
      <div className="drop-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Dropdown;
