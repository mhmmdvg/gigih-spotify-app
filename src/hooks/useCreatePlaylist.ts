import { FormEvent } from 'react';
// import { useNavigate } from 'react-router-dom';
import { setCreatePlaylist } from '../components/create-playlist/createPlaylistSlice';
import { setCurrentPlaylists } from '../pages/playlist/playlistSlice';

import { useAppDispatch, useAppSelector } from '../reduce/hooks';
import useUser from './useUser';

export default function useCreatePlaylist() {
  const [isUser] = useUser();

  const { token } = useAppSelector((state) => state.auth);

  // const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const createPlaylist = (
    event: FormEvent<HTMLFormElement>,
    inputPlaylist: { title: string; description: string }
  ) => {
    event.preventDefault();
    // fetch(`https://api.spotify.com/v1/users/${isUser?.id}/playlists`, {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     name: inputPlaylist.title,
    //     description: inputPlaylist.description,
    //     public: true,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     dispatch(setCreatePlaylist(data));
    //   });

    Promise.all([
      fetch(`https://api.spotify.com/v1/users/${isUser?.id}/playlists`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: inputPlaylist.title,
          description: inputPlaylist.description,
          public: true,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(setCreatePlaylist(data));
        }),
      fetch('https://api.spotify.com/v1/me/playlists', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((result) => dispatch(setCurrentPlaylists(result.items))),
    ]);
  };

  return [createPlaylist] as const;
}
