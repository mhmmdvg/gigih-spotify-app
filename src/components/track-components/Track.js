import React from "react";
import "../../App.css";

const Track = ({ image, title, artist, alt }) => {
  return (
    <>
      {/* <img className="Imageopt" src={image} alt="queen" />
      <h3>{title}</h3>
      <p className="Text">{artist}</p>
      <div className="Center">
        <button className="Button">Select</button>
      </div> */}

      <table className="card">
        <tbody>
          <tr>
            <td>
              <img className="Imageopt" src={image} alt={alt} />
              <h1 className="Text">{title}</h1>
              <p className="Text">{artist}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Track;
