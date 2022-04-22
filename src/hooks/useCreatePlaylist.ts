import { FormEvent } from 'react';
// import { useNavigate } from 'react-router-dom';
import { setCreatePlaylist } from '../components/create-playlist/createPlaylistSlice';
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
      });
    // setTimeout(() => {
    //   navigate('/playlist');
    // }, 200);
  };

  return [createPlaylist] as const;
}
