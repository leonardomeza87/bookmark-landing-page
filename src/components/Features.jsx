import React, { useMemo, useState } from "react";
import BlueSquare from "../helper/BlueSquare";
import Tab1 from "../images/illustration-features-tab-1.svg";
import Tab2 from "../images/illustration-features-tab-2.svg";
import Tab3 from "../images/illustration-features-tab-3.svg";

const initialDb = [
  {
    title: "Bookmark in one click",
    description: `Organize your bookmarks however you like. Our simple
    drag-and-drop interface gives you complete control over how you
    manage your favourite sites.`,
  },
  {
    title: "Intelligent search",
    description: `Our powerful search feature will help you find saved sites in no
    time at all. No need to trawl through all of your bookmarks.
  `,
  },
  {
    title: "Share your bookmarks",
    description: `Easily share your bookmarks and collections with others. Create
    a shareable link that you can send at the click of a button.
  `,
  },
];

const Features = () => {
  const [active, setActive] = useState("info1");
  const handleChange = (ab) => {
    setActive(ab);
  };
  const preload = useMemo(() => {
    const images = [Tab1, Tab2, Tab3];
    let pre = [];
    for (let i = 0; i < images.length; i++) {
      pre[i] = new Image();
      pre[i].src = images[i];
    }
    return pre;
  }, []);
  return (
    <div className="features-container">
      <div className="features-info">
        <div className="some-info">
          <h1 className="features-title">Features</h1>
          <p className="features-details">
            Our aim is to make it quick and easy for you to access your favorite
            websites. Your bookmarks sync between your devices so you can access
            them on the go{" "}
          </p>
        </div>
        <div className="slider-selector">
          <ul>
            <li onClick={() => handleChange("info1")}>
              <label htmlFor="slider1">Simple Bookmarking</label>
              <div
                className={`orange-underline ${
                  active === "info1" ? "show" : ""
                }`}
              ></div>
            </li>
            <li onClick={() => handleChange("info2")}>
              <label htmlFor="slider2">Speedy Searching</label>
              <div
                className={`orange-underline ${
                  active === "info2" ? "show" : ""
                }`}
              ></div>
            </li>
            <li onClick={() => handleChange("info3")}>
              <label htmlFor="slider3">Easy Sharing</label>
              <div
                className={`orange-underline ${
                  active === "info3" ? "show" : ""
                }`}
              ></div>
            </li>
          </ul>
        </div>
      </div>
      <div className="slider-background">
        <BlueSquare />
        {active === "info1" && (
          <div className="card">
            <div className="image-card-container">
              <img src={preload[0].src} alt="reference" />
            </div>
            <div className="card-detailed">
              <h3>{initialDb[0].title}</h3>
              <p>{initialDb[0].description}</p>
              <button className="btn-dsk">More Info</button>
            </div>
          </div>
        )}
        {active === "info2" && (
          <div className="card">
            <div className="image-card-container">
              <img src={preload[1].src} alt="reference" />
            </div>
            <div className="card-detailed two-last">
              <h3>{initialDb[1].title}</h3>
              <p>{initialDb[1].description}</p>
              <button className="btn-dsk">More Info</button>
            </div>
          </div>
        )}
        {active === "info3" && (
          <div className="card">
            <div className="image-card-container">
              <img src={preload[2].src} alt="reference" />
            </div>
            <div className="card-detailed two-last">
              <h3>{initialDb[2].title}</h3>
              <p>{initialDb[2].description}</p>
              <button className="btn-dsk">More Info</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Features;
