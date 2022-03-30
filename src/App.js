import "./App.css";
import React from "react";
import Auth from "./pages/home/auth/Auth";

function App() {
  return (
    <div className="App">
      <h1 className="title">Track List</h1>

      {/* {data
          .filter((track, index, arr) => {
            return (
              arr.map((item) => item.album.id).indexOf(track.album.id) === index
            );
          })
          .map(({ album }) => (
            <React.Fragment key={album.id}>
              <Track
                image={album.images[1].url}
                title={album.name}
                artist={album.artists[0].name}
                alt={album.name}
              />
            </React.Fragment>
          ))} */}

      <Auth />
    </div>
  );
}

export default App;
