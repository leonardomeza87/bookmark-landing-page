import React from "react";

const Features = () => {
     return (
          <div className="features-container">
               <div className="features-info">
                    <h1 className="features-title">Features</h1>
                    <p className="features-details">
                         Our aim is to make it quiick and easy for you to access
                         your favorite websites. Your bookmarks sync between
                         your devices so you can access them on the go{" "}
                    </p>
                    <div className="slider-selector">
                         <label htmlFor="slider1">
                              Simple Bookmarking
                              <div className="orange-underline"></div>
                         </label>
                         <label htmlFor="slider2">
                              Speedy Searching
                              <div className="orange-underline"></div>
                         </label>
                         <label htmlFor="slider3">
                              Easy Sharing
                              <div className="orange-underline"></div>
                         </label>
                    </div>
               </div>
               <div className="slider-features-container">
                    <div className="inner-slider">
                         <input type="radio" name="slider-radio" id="slider1" value={"info1"} />
                         <input type="radio" name="slider-radio" id="slider2" value={"info2"}/>
                         <input type="radio" name="slider-radio" id="slider3" value={"info3"}/>

                         <div className="slide">
                              <h3>Bookmark in one click</h3>
                              <p>
                                   Organize your bookmarks however you like. Our
                                   simple drag-and-drop interface gives you
                                   complete control over how you manage your
                                   favourite sites. More Info
                              </p>
                         </div>
                         <div className="slide">
                              <h3>Intelligent search</h3>
                              <p>
                                   {" "}
                                   Our powerful search feature will help you
                                   find saved sites in no time at all. No need
                                   to trawl through all of your bookmarks. More
                                   Info
                              </p>
                         </div>
                         <div className="slide">
                              <h3>Share your bookmarks</h3>
                              <p>
                                   {" "}
                                   Easily share your bookmarks and collections
                                   with others. Create a shareable link that you
                                   can send at the click of a button. More Info
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Features;
