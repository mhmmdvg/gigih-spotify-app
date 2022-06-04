import { useEffect, useState } from 'react';
import { useAppSelector } from '../reduce/hooks';
import { CurrentPlaylistTypes } from '../type';

// https://api.spotify.com/v1/me/playlists
export function useCurrentPlaylist() {
  const [currentPlaylist, setCurrentPlaylist] = useState<
    CurrentPlaylistTypes[]
  >([]);

  // const dispatch = useAppDispatch();
  const { current } = useAppSelector((state) => state.playlist);

  const { token } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const getCurrentPlaylist = () => {
      fetch(`https://api.spotify.com/v1/me/playlists`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((result) => {
          setCurrentPlaylist(result.items);
        });
    };
    getCurrentPlaylist();
  }, [token, current]);

  return [currentPlaylist] as const;
}
