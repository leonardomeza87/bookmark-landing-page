import React, { useState } from "react";
import Tab1 from "../images/illustration-features-tab-1.svg";
import Tab2 from "../images/illustration-features-tab-2.svg";
import Tab3 from "../images/illustration-features-tab-3.svg";

const Features = () => {
     const [active, setActive] = useState("info1");
     const handleChange = (e) => {
          setActive(e.target.value);
     };
     return (
          <div className="features-container">
               <div className="features-info">
                    <div className="some-info">
                         <h1 className="features-title">Features</h1>
                         <p className="features-details">
                              Our aim is to make it quick and easy for you to
                              access your favorite websites. Your bookmarks sync
                              between your devices so you can access them on the
                              go{" "}
                         </p>
                    </div>
                    <div className="slider-selector">
                         <ul>
                              <li>
                                   <label htmlFor="slider1">
                                        Simple Bookmarking
                                   </label>
                                   <div
                                        className={`orange-underline ${
                                             active === "info1" ? "show" : ""
                                        }`}
                                   ></div>
                              </li>
                              <li>
                                   <label htmlFor="slider2">
                                        Speedy Searching
                                   </label>
                                   <div
                                        className={`orange-underline ${
                                             active === "info2" ? "show" : ""
                                        }`}
                                   ></div>
                              </li>
                              <li>
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
                    <div className="slider-features-container">
                         <div className="inner-slider">
                              <input
                                   type="radio"
                                   name="slider-radio"
                                   id="slider1"
                                   value={"info1"}
                                   onChange={handleChange}
                              />
                              <input
                                   type="radio"
                                   name="slider-radio"
                                   id="slider2"
                                   value={"info2"}
                                   onChange={handleChange}
                              />
                              <input
                                   type="radio"
                                   name="slider-radio"
                                   id="slider3"
                                   value={"info3"}
                                   onChange={handleChange}
                              />

                              <div className="slide one-s">
                                   <img src={Tab1} alt="tab 1" />
                                   <h3>Bookmark in one click</h3>
                                   <p>
                                        Organize your bookmarks however you
                                        like. Our simple drag-and-drop interface
                                        gives you complete control over how you
                                        manage your favourite sites. More Info
                                   </p>
                              </div>
                              <div className="slide two-s">
                                   <img src={Tab2} alt="tab 2" />
                                   <h3>Intelligent search</h3>
                                   <p>
                                        {" "}
                                        Our powerful search feature will help
                                        you find saved sites in no time at all.
                                        No need to trawl through all of your
                                        bookmarks. More Info
                                   </p>
                              </div>
                              <div className="slide three-s">
                                   <img src={Tab3} alt="tab 3" />
                                   <h3>Share your bookmarks</h3>
                                   <p>
                                        {" "}
                                        Easily share your bookmarks and
                                        collections with others. Create a
                                        shareable link that you can send at the
                                        click of a button. More Info
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Features;
