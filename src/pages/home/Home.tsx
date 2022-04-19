import React, { useEffect, useState } from 'react';
import Button from '../../components/button/Button';
import SearchForm from '../../components/search-form/SearchForm';
import Track from '../../components/track/Track';
import useAddPlaylist from '../../hooks/useAddPlaylist';
import useSearch from '../../hooks/useSearch';
import useSelectedTrack from '../../hooks/useSelectedTrack';
import useUser from '../../hooks/useUser';
import { useAppDispatch } from '../../reduce/hooks';
import { CombineTrackType } from '../../type';
import { setToken } from '../auth/authSlice';
import CreatePlaylist from './CreatePlaylist';

export default function Home() {
  const [selected, setSelected, handleSelected] = useSelectedTrack();
  const [searchResult, handleSearch, searchTrack] = useSearch();
  const [combineTrack, setCombineTrack] = useState<CombineTrackType[]>([]);
  const [isUser] = useUser();
  const [trackPlaylist, addToPlaylist] = useAddPlaylist();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const combineItem = searchResult.map((track) => ({
      ...track,
      isSelected: selected.find((item) => item.id === track.id),
    }));
    setCombineTrack(combineItem);
  }, [searchResult, selected]);

  return (
    <>
      <h3>{isUser?.display_name}</h3>
      <p>{isUser?.id}</p>

      <CreatePlaylist trackPlaylist={trackPlaylist} />

      <SearchForm onChange={handleSearch} onSubmit={searchTrack} />

      {selected.length === 0 ? null : <h1>Selected Track</h1>}
      <div className="track-container">
        {selected.map((track) => (
          <Track
            key={track.id}
            images={track.album.images[0]?.url}
            title={track.name}
            artist={track.artists[0]?.name}
            albumName={track.album.name}
            onClick={() => handleSelected(track)}
          >
            Deselect
          </Track>
        ))}
      </div>
      {selected.length === 0 ? null : (
        <Button
          onClick={() => {
            addToPlaylist(selected);
            setSelected([]);
          }}
        >
          Add to Playlist
        </Button>
      )}

      {combineTrack.length === 0 ? null : <h1>Track List</h1>}
      <div className="track-container">
        {combineTrack.map((track) => (
          <Track
            key={track.id}
            images={track.album.images[0]?.url}
            title={track.name}
            artist={track.artists[0]?.name}
            albumName={track.album.name}
            onClick={() => handleSelected(track)}
          >
            {track.isSelected ? 'Deselect' : 'Select'}
          </Track>
        ))}
      </div>
      <Button onClick={() => dispatch(setToken(''))}>Logout</Button>
    </>
  );
}
