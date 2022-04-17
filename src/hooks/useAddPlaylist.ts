import { useState } from 'react';
import { useAppSelector } from '../reduce/hooks';
import { TrackType } from '../type';

export default function useAddPlaylist() {
  const [trackPlaylist, setTrackPlaylist] = useState([]);

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

    await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTrackPlaylist(data.items);
      });
  };

  return [trackPlaylist, addToPlayList] as const;
}
