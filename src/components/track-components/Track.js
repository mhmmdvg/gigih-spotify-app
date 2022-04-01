import React, { useEffect, useState } from "react";
import "../../App.css";
import Button from "../button/Button";

const Track = ({ tracks }) => {
  const [isSelected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!isSelected);
    let current_selected = JSON.parse(localStorage.getItem("selected"));

    if (isSelected === false) {
      current_selected[tracks.id] = tracks;
    } else {
      delete current_selected[tracks.id];
    }
    localStorage.setItem("selected", JSON.stringify(current_selected));
    // setSelected([...selected, e]);
    // setSearchResults(searchResults.filter((track) => track !== e));
  };

  useEffect(() => {
    let current_selected = JSON.parse(localStorage.getItem("selected"));
    if (current_selected[tracks.id]) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  });

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
              <img
                className="Imageopt"
                src={tracks.album.images[0].url}
                alt={tracks.name}
              />
              <h1 className="Text">{tracks.name}</h1>
              <p className="Text">{tracks.artists[0].name}</p>
              <Button onClick={handleClick}>
                {isSelected ? "Deselect" : "Select"}
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Track;
