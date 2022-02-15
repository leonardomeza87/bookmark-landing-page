import React, { useState } from "react";

import { ReactComponent as IconError } from "../images/icon-error.svg";

const Mail = () => {
  const [inputValue, setInputValue] = useState("");
  const [validationState, setValidationState] = useState(0);

  const handleChange = (e) => {
    if (validationState) {
      setValidationState(0);
    }
    setInputValue(e.target.value);
  };

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(inputValue)) {
      setValidationState(1);
    } else {
      setValidationState(-1);
    }
  };

  const validationByHittingEnter = (e) => {
    if (e.key === "Enter") {
      validateEmail();
    }
  };
  return (
    <div className="mail">
      <p>35,000+ already joined</p>
      <h3>Stay up-to-date with what we’re doing</h3>
      <div
        className={`input-email ${
          validationState === -1
            ? "error"
            : validationState === 1
            ? "correct"
            : ""
        }`}
      >
        <div className="input-container">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="youremail@mail.com"
            onChange={handleChange}
            value={inputValue}
            onKeyUp={validationByHittingEnter}
          />
          <IconError />
        </div>
        <div className="error-msg">
          <span>
            {validationState === -1
              ? "Whoops, make sure it's an email"
              : validationState === 1
              ? "Thank you, you have subscribed to our emails"
              : "..."}
          </span>
        </div>
      </div>
      <button onMouseUp={validateEmail}>Contact Us</button>
    </div>
  );
};

export default Mail;
