import React from "react";
import Dropdown from "./Dropdown";

const FAQ = () => {
  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <Dropdown>
        <span className="question">Lorem</span>
        <span className="answer">YEAHHHH</span>
      </Dropdown>
    </div>
  );
};

export default FAQ;
