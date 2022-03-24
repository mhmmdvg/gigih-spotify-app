import "./App.css";
import data from "./data";
import Track from "./components/track-components/Track";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Track
          image={data.album.images[0].url}
          title={data.album.name}
          artist={data.album.artists[0].name}
        />
      </div>
    </div>
  );
}

export default App;
