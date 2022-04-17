import { FormEvent } from 'react';
import { setCreatePlaylist } from '../pages/home/createPlaylistSlice';
import { useAppDispatch, useAppSelector } from '../reduce/hooks';
import useUser from './useUser';

export default function useCreatePlaylist() {
  const [isUser] = useUser();

  const { token } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const createPlaylist = (
    event: FormEvent<HTMLFormElement>,
    inputPlaylist: { title: string; description: string }
  ) => {
    event.preventDefault();
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
        dispatch(setCreatePlaylist(data));
      });
  };

  return [createPlaylist] as const;
}
