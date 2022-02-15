import React from "react";

import BlueSquare from "../helper/BlueSquare";
import IllustrationHero from "../images/illustration-hero.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="featured-images">
          <BlueSquare />
          <div className="illustration">
            <img src={IllustrationHero} alt="illustration" />
          </div>
        </div>
        <div className="hero-text">
          <h1>A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="buttons">
            <button className="chrome">Get it on Chrome</button>
            <button className="firefox">Get it on Firefox</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
