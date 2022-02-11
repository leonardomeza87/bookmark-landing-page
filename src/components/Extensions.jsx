import React from "react";
import ExtensionsBrowser from "./ExtensionsBrowser";
import ChromeImg from '../images/logo-chrome.svg'
import FirefoxImg from '../images/logo-firefox.svg'
import OperaImg from '../images/logo-opera.svg'

const Extensions = () => {
  return (
    <div className="extension-container">
      <div className="extension-details">
        <h3>Download the extension</h3>
        <p>
          we've got more browsers in the pipeline. Please do let us know if
          you've got a favorite you'd like us to prioritize
        </p>
      </div>
      <div className="browsers-container">
          <ExtensionsBrowser browser={"Chrome"} version={62} image={ChromeImg} />
          <ExtensionsBrowser browser={"Firefox"} version={55} image={FirefoxImg} />
          <ExtensionsBrowser browser={"Opera"} version={46} image={OperaImg} />
      </div>
    </div>
  );
};

export default Extensions;
