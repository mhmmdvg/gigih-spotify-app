import React, { useState, useEffect } from "react";
import SearchForm from "../../components/form-search/SearchForm";
import Track from "../../components/track-components/Track";

export default function Home({ onChange, onSubmit, tracks }) {
  const [selected, setSelected] = useState([]);
  const [isCombine, setCombine] = useState([]);

  const handleClick = (track) => {
    const alreadySelected = selected.find((item) => item.id === track.id);

    if (alreadySelected) {
      setSelected(selected.filter((item) => item.id !== track.id));
    } else {
      setSelected([...selected, track]);
    }
  };

  useEffect(() => {
    const combineItem = tracks.map((track) => ({
      ...track,
      isSelected: selected.find((item) => item.id === track.id),
    }));
    setCombine(combineItem);
  }, [selected, tracks]);

  const renderItem = () => {
    return (
      <>
        {isCombine.map((track, index) => (
          <React.Fragment key={index}>
            <Track
              images={track.album.images[1].url}
              title={track.name}
              artist={track.artists[0].name}
              alt={track.name}
              onClick={() => handleClick(track)}
            >
              {track.isSelected ? "Deselect" : "Select"}
              {/* {isSelected ? "Deselect" : "Select"} */}
            </Track>
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <>
      {/* <form className="form-search" onSubmit={onSubmit}>
        <input
          className="input-search"
          onChange={onChange}
          type="text"
          name="search"
          placeholder="Search for a song"
        />
        <input className="input-submit" type="submit" value="Search" />
      </form> */}
      <SearchForm onChange={onChange} onSubmit={onSubmit} />

      {selected.length === 0 ? null : <h1>Selected List</h1>}
      <div className="Wrapper">
        {selected.map((track, index) => (
          <React.Fragment key={index}>
            <Track
              images={track.album.images[1].url}
              title={track.name}
              artist={track.artists[0].name}
              alt={track.name}
              onClick={() => handleClick(track)}
            >
              Deselect
            </Track>
          </React.Fragment>
        ))}
      </div>

      {isCombine.length === 0 ? null : <h1>Track List</h1>}
      <div className="Wrapper">{renderItem()}</div>
    </>
  );
}
