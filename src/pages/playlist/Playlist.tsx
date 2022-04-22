import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../reduce/hooks';
import { CurrentPlaylistTypes } from '../../type';

export default function Playlist() {
  // const [currentPlaylist] = useCurrentPlaylist();

  const { current } = useAppSelector((state) => state.playlist);

  return (
    <div className="grid grid-cols-3 gap-4 px-10 py-10 ">
      {current.map((playlist: CurrentPlaylistTypes) => (
        <Link key={playlist.id} to={`/playlist/${playlist.id}`}>
          <div className="bg-gray-100 px-6 py-6 w-64 rounded-md cursor-pointer hover:bg-gray-300 transition duration-300">
            <img
              className="w-64 rounded-md shadow-2xl mb-3"
              src={
                playlist?.images[0]?.url === undefined
                  ? `https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228`
                  : playlist.images[0].url
              }
              alt={playlist.name}
            />
            <h3 className="text-base">{playlist.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
