import React from "react";
import Dots from "../images/bg-dots.svg";

const ExtensionsBrowser = ({ browser, version, image }) => {
  return (
    <div className="browser">
      <div className="browser-img">
        <img src={image} alt="browser" />
      </div>
      <div className="mini-info">
        <h4>Add to {browser}</h4>
        <span>Minimun version {version}</span>
      </div>
      <img src={Dots} alt="dots" className="dots" />
      <div className="button-container">
        <button>{"Add & Install Extension"}</button>
      </div>
    </div>
  );
};

export default ExtensionsBrowser;
