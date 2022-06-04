import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlaylistItemNoButton from '../../components/playlist-item/PlaylistItemNoButton';
import { useAppSelector } from '../../reduce/hooks';
import { millisToMinutesAndSeconds } from '../../services/msToMinute';
import { CurrentPlaylistTypes, TrackPlaylistType } from '../../type';

export default function DetailPlaylist() {
  const [playlistItem, setPlaylistItem] = useState<TrackPlaylistType[]>([]);

  const { id } = useParams();
  const { token } = useAppSelector((state) => state.auth);
  const { current } = useAppSelector((state) => state.playlist);

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
        {current
          .filter((item: CurrentPlaylistTypes) => item.id === id)
          .map((item: CurrentPlaylistTypes) => (
            <React.Fragment key={item.id}>
              <img
                className="w-60 mr-4"
                src={item.images[0]?.url}
                alt={item.name}
              />
              <div>
                <h1 className="mb-6 font-extrabold text-6xl">{item.name}</h1>

                <h3>{item.description}</h3>
              </div>
            </React.Fragment>
          ))}
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
