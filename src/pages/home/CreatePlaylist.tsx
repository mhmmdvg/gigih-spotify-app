import React from 'react';
import Track from '../../components/track/Track';
import useCreatePlaylist from '../../hooks/useCreatePlaylist';
import useInputPlaylist from '../../hooks/useInputPlaylist';
import { useAppSelector } from '../../reduce/hooks';
import { TrackPlaylistType } from '../../type';

export default function CreatePlaylist(props: TrackPlaylistType) {
  const { trackPlaylist } = props;
  const [inputPlaylist, handleInputPlaylist] = useInputPlaylist();
  const [createPlaylist] = useCreatePlaylist();

  const { name, description } = useAppSelector((state) => state.createPlaylist);

  return (
    <>
      <form
        className="form-playlist"
        onSubmit={(event) => createPlaylist(event, inputPlaylist)}
      >
        <input
          className="text-input"
          placeholder="Title"
          name="title"
          onChange={handleInputPlaylist}
          value={inputPlaylist.title}
          maxLength={10}
        />
        <textarea
          className="text-input"
          placeholder="Description"
          name="description"
          onChange={handleInputPlaylist}
          value={inputPlaylist.description}
        />

        <input
          className="create-button"
          type="submit"
          value="Create Playlist"
        />
      </form>
      <h1>{`${name} Playlist`}</h1>
      <p>{description}</p>
      <div className="track-container">
        {trackPlaylist.map((item) => (
          <Track
            key={item.track.id}
            images={item.track.album.images[0]?.url}
            title={item.track.name}
            artist={item.track.artists[0]?.name}
            albumName={item.track.album.name}
          >
            Play
          </Track>
        ))}
      </div>
    </>
  );
}
