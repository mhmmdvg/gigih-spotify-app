import React from 'react';
import Track from '../track-components/Track';

export default function CreatePlaylist(props) {
  const {
    profile,
    createSubmit,
    handleInput,
    inputValue,
    playlist,
    trackPlaylist,
  } = props;

  return (
    <>
      <div>
        <h3>{profile.display_name}</h3>
        <p>
          ID:
          {' '}
          {profile.id}
        </p>
      </div>

      <form className="form-playlist" onSubmit={createSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          maxLength="10"
          onChange={handleInput}
          value={inputValue.title}
        />
        <textarea
          type="text"
          placeholder="Description"
          name="description"
          onChange={handleInput}
          value={inputValue.description}
        />
        <input type="submit" value="Create Playlist" />
      </form>

      <h1>
        {playlist.name}
        {' '}
        Playlist
      </h1>
      <h3>{playlist.description}</h3>
      <div className="Wrapper">
        {trackPlaylist.map((item) => (
          <React.Fragment key={item.track.id}>
            <Track
              images={item.track.album.images[0].url}
              title={item.track.name}
              artist={item.track.artists[0].name}
              alt={item.track.name}
            >
              Play
            </Track>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
