import React from "react";

const FeaturesDetails = ({ feature }) => {
  const { image, title, description } = feature;
  return (
    <div className="card">
      <div className="image-card-container">
        <img src={image} alt="reference" />
      </div>
      <div className="card-detailed">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeaturesDetails;
