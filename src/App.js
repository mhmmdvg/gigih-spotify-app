import logo from "./logo.svg";
import "./App.css";
import data from "./data";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="Wrapper">
          <img
            className="Imageopt"
            src={data.album.images[0].url}
            alt="queen"
          />
          <h3>{data.album.name}</h3>
          <p className="Text">{data.album.artists[0].name}</p>
          <div className="Center">
            <button className="Button">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
