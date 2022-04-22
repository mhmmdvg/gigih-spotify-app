import { useAppSelector } from '../reduce/hooks';
import { TrackType } from '../type';

export function useAddPlaylist() {
  // const [trackPlaylist, setTrackPlaylist] = useState([]);

  const { token } = useAppSelector((state) => state.auth);
  const { id } = useAppSelector((state) => state.createPlaylist);

  const addToPlayList = async (trackSelect: TrackType[]) => {
    const url = `https://api.spotify.com/v1/playlists/${id}/tracks`;
    const track = trackSelect.map((elem) => elem.uri);
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
  };

  return [addToPlayList] as const;
}

// export function useGetPlaylistItems() {
//   const [playlistItem, setPlaylistItem] = useState([]);

//   const { token } = useAppSelector((state) => state.auth);
//   // const { id } = useAppSelector((state) => state.createPlaylist);

//   // useEffect(() => {
//   //   const getPlaylistItems = async () => {
//   //     const url = `https://api.spotify.com/v1/playlists/${id}/tracks`;
//   //     const response = await fetch(url, {
//   //       method: 'GET',
//   //       headers: {
//   //         Authorization: `Bearer ${token}`,
//   //         'Content-Type': 'application/json',
//   //       },
//   //     })
//   //       .then((res) => res.json())
//   //       .then((result) => result.items);
//   //     setPlaylistItem(response);
//   //   };
//   //   getPlaylistItems();
//   // });

//   const getPlaylistItems = async (playlist: string | undefined) => {
//     const url = `https://api.spotify.com/v1/playlists/${playlist}/tracks`;
//     await fetch(url, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((res) => res.json())
//       .then((result) => setPlaylistItem(result.items));
//   };

//   return [playlistItem, getPlaylistItems] as const;
// }
