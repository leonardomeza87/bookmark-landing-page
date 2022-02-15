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
      <div className="dropdown-container">
        <Dropdown>
          <span className="question">What is Bookmark?</span>
          <span className="answer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </span>
        </Dropdown>
        <Dropdown>
          <span className="question">How can I request a new browser?</span>
          <span className="answer">
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </span>
        </Dropdown>
        <Dropdown>
          <span className="question">Is there a mobile app?</span>
          <span className="answer">
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus
            vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
            quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin
            ex et ultricies bibendum.
          </span>
        </Dropdown>
        <Dropdown>
          <span className="question">What about other Chromium browsers?</span>
          <span className="answer">
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit.
          </span>
        </Dropdown>
      </div>

      <button className="more-info">More Info</button>
    </div>
  );
};

export default FAQ;
