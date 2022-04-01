import "./App.css";
import React from "react";
import AuthSpotify from "./pages/auth/AuthSpotify";
import Auth from "./pages/auth/Auth";
// import Auth from "./pages/home/auth/Auth";

function App() {
  return (
    <div className="App">
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

      <AuthSpotify />
      {/* <Auth /> */}
    </div>
  );
}

export default App;
