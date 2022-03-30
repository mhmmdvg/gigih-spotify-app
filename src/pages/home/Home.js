import React, { Component } from "react";
import Auth from "./auth/Auth";

export default class Home extends Component {
  render() {
    const authSpotify = new Auth();

    const renderItem = () => {
      return (
        searchResults &&
        searchResults.map((track) => (
          <React.Fragment key={track.id}>
            <img
              className="image-track"
              src={track.album.images[0].url}
              alt=""
            />

            <p>{track.album.name}</p>
          </React.Fragment>
        ))
      );
    };

    return (
      <>
        <h1>Auth</h1>

        {!token ? (
          <a href="#" onClick={(e) => this.redirectToSpotify(e)}>
            Click to login with spotify
          </a>
        ) : (
          <button onClick={() => this.logout()}>Logout</button>
        )}

        <form onSubmit={(e) => this.searchTrack(e)}>
          <input
            onChange={(e) => {
              this.handleInput(e);
            }}
            type="text"
            name="search"
            placeholder="Search for a song"
            value={this.state.searchKey}
          />
          <input type="submit" value="Search" />
        </form>

        {renderItem()}
      </>
    );
  }
}
