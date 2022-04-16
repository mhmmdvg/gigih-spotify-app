import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import SearchForm from '../../components/form-search/SearchForm';
import Track from '../../components/track-components/Track';
import Button from '../../components/button/Button';
import CreatePlaylist from '../../components/create-playlist/CreatePlaylist';
import { setToken } from '../../redux/slice';
import { PlayTrackMap } from './type';

type UserType = {
  id: string;
  display_name: string;
};

export default function Home() {
  // const [searchKey, searchResults, setSearchResults, handleSearch] =
  //   useSearch();
  const [searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState<PlayTrackMap[]>([]);
  const [selected, setSelected] = useState<PlayTrackMap[]>([]);
  const [isCombine, setCombine] = useState<PlayTrackMap[]>([]);
  // * Untuk mendapatkan current user
  const [isUser, setUser] = useState<UserType | null>(null);
  // * Untuk membuat playlist
  const [isPlaylist, setPlaylist] = useState<{
    id: string;
    name: string;
    description: string;
  } | null>(null);
  // * Add track to playlist
  const [trackPlaylist, setTrackPlaylist] = useState([]);

  const [inputPlaylist, setInputPlaylist] = useState({
    title: '',
    description: '',
  });

  const { token } = useSelector((state: RootStateOrAny) => state.auth);
  const dispatch = useDispatch();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKey(event.target.value);
  };

  const searchTrack = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = `https://api.spotify.com/v1/search?q=${searchKey}&type=track`;
    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((result) => setSearchResults(result.tracks.items));
  };

  const createPlaylist = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`https://api.spotify.com/v1/users/${isUser?.id}/playlists`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: inputPlaylist.title,
        description: inputPlaylist.description,
        public: false,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPlaylist(data);
      });
  };

  const handleInputPlaylist = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInputPlaylist({ ...inputPlaylist, [name]: value });
  };

  const addToPlayList = async () => {
    const url = `https://api.spotify.com/v1/playlists/${isPlaylist?.id}/tracks`;
    const track = selected.map((elem) => elem.uri);
    await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uris: track,
      }),
    }).then((res) => res.json());

    await fetch(
      `https://api.spotify.com/v1/playlists/${isPlaylist?.id}/tracks`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setTrackPlaylist(data.items);
      });

    setSelected([]);
  };

  const handleClick = (track: PlayTrackMap) => {
    const alreadySelected = selected.find((item) => item.id === track.id);

    if (alreadySelected) {
      setSelected(selected.filter((item) => item.id !== track.id));
    } else {
      setSelected([...selected, track]);
    }
  };

  const logout = () => {
    window.localStorage.removeItem('token');
    dispatch(setToken(''));
  };

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch('https://api.spotify.com/v1/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((result) => result);
      setUser(response);
    };
    getUsers();
  }, [token]);

  useEffect(() => {
    const combineItem = searchResults.map((track) => ({
      ...track,
      isSelected: selected.find((item) => item.id === track.id),
    }));
    setCombine(combineItem);
  }, [selected, searchResults]);

  const renderItem = () => (
    <>
      {isCombine.map((track) => (
        <React.Fragment key={track.id}>
          <Track
            images={track.album.images[0].url}
            title={track.name}
            artist={track.artists[0].name}
            albumName={track.album.name}
            onClick={() => handleClick(track)}
          >
            {track.isSelected ? 'Deselect' : 'Select'}
          </Track>
        </React.Fragment>
      ))}
    </>
  );

  return (
    <>
      <CreatePlaylist
        profile={isUser}
        playlist={isPlaylist}
        trackPlaylist={trackPlaylist}
      />

      <form className="form-playlist" onSubmit={createPlaylist}>
        <input
          className="text-input"
          placeholder="Title"
          name="title"
          maxLength={10}
          onChange={handleInputPlaylist}
          value={inputPlaylist.title}
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

      <SearchForm onChange={handleSearch} onSubmit={searchTrack} />

      {selected.length === 0 ? null : <h1>Selected List</h1>}

      <div className="track-container">
        {selected.map((track) => (
          <React.Fragment key={track.id}>
            <Track
              images={track.album.images[0].url}
              title={track.name}
              artist={track.artists[0].name}
              albumName={track.album.name}
              onClick={() => handleClick(track)}
            >
              Deselect
            </Track>
          </React.Fragment>
        ))}
      </div>
      {selected.length === 0 ? null : (
        <Button onClick={addToPlayList}>Save to Playlist</Button>
      )}

      {isCombine.length === 0 ? null : <h1>Track List</h1>}
      <div className="track-container">{renderItem()}</div>
      <Button onClick={logout}> Log Out</Button>
    </>
  );
}
