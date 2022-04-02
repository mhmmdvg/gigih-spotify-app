import React from "react";
import "../../App.css";
import Button from "../button/Button";

const Track = ({ images, title, artist, onClick, children }) => {
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
              <img className="Imageopt" src={images} alt={title} />
              <h1 className="Text">{title}</h1>
              <p className="Text">{artist}</p>
              <Button onClick={onClick}>{children}</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Track;
