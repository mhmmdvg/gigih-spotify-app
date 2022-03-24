import React from "react";

const Track = ({ image, title, artist }) => {
  return (
    <div className="Wrapper">
      <img className="Imageopt" src={image} alt="queen" />
      <h3>{title}</h3>
      <p className="Text">{artist}</p>
      <div className="Center">
        <button className="Button">Select</button>
      </div>
    </div>
  );
};

export default Track;
