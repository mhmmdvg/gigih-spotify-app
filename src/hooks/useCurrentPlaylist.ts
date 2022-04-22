// import { useEffect } from 'react';
import { setCurrentPlaylist } from '../pages/playlist/playlistSlice';
import { useAppDispatch, useAppSelector } from '../reduce/hooks';
// import { CurrentPlaylistTypes } from '../type';

// https://api.spotify.com/v1/me/playlists
export function useCurrentPlaylist() {
  // const [currentPlaylist, setCurrentPlaylist] = useState<
  //   CurrentPlaylistTypes[]
  // >([]);

  const dispatch = useAppDispatch();

  const { token } = useAppSelector((state) => state.auth);

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
        // setCurrentPlaylist(result.items)
        dispatch(setCurrentPlaylist(result.items));
      });
  };

  return [getCurrentPlaylist];

  // return [currentPlaylist] as const;
}

// export function useCurrentPlaylistSidebar() {
//   const [currentPlaylistSidebar, setCurrentPlaylistSidebar] = useState<
//     CurrentPlaylistTypes[]
//   >([]);

//   const { token, tokenType } = useAppSelector((state) => state.auth);

//   useEffect(() => {
//     const getCurrentPlaylistSidebar = () => {
//       fetch(`https://api.spotify.com/v1/me/playlists`, {
//         method: 'GET',
//         headers: {
//           Authorization: `${tokenType} ${token}`,
//           'Content-type': 'application/json',
//         },
//       })
//         .then((res) => res.json())
//         .then((result) => setCurrentPlaylistSidebar(result.items));
//     };

//     // const interval = setInterval(getCurrentPlaylistSidebar, 300);
//     getCurrentPlaylistSidebar();
//     // return () => clearInterval(interval);
//   }, []);

//   return [currentPlaylistSidebar] as const;
// }
