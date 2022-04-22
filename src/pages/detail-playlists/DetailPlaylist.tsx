import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlaylistItemNoButton from '../../components/playlist-item/PlaylistItemNoButton';
import { useCurrentPlaylist } from '../../hooks/useCurrentPlaylist';
import { useAppSelector } from '../../reduce/hooks';
import { millisToMinutesAndSeconds } from '../../services/msToMinute';
import { TrackPlaylistType } from '../../type';

export default function DetailPlaylist() {
  const [playlistItem, setPlaylistItem] = useState<TrackPlaylistType[]>([]);
  const [currentPlaylist] = useCurrentPlaylist();

  const { id } = useParams();
  const { token } = useAppSelector((state) => state.auth);

  const findId = currentPlaylist.find((item) => item.id === id);

  useEffect(() => {
    const getId = id;
    const url = `https://api.spotify.com/v1/playlists/${getId}/tracks`;
    fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setPlaylistItem(result.items);
      });
  }, []);

  return (
    <div className="w-full px-10 py-10">
      <div className="flex flex-row">
        <img
          className="w-60 mr-4"
          src={findId?.images[0]?.url}
          alt={findId?.name}
        />
        <div>
          <h1 className="mb-6 font-extrabold text-6xl">{findId?.name}</h1>

          <h3>{findId?.description}</h3>
        </div>
      </div>

      <div className="flex flex-col my-6">
        {playlistItem.map((item) => (
          <PlaylistItemNoButton
            key={item.track.id}
            images={item.track.album.images[0]?.url}
            title={item.track.name}
            duration={millisToMinutesAndSeconds(item.track.duration_ms)}
            artist={item.track.artists[0]?.name}
          />
        ))}
      </div>
    </div>
  );
}
