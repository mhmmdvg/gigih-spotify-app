import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import CatLogo from '../../assets/icons/cat-logo2.svg';
import { useCurrentPlaylist } from '../../hooks/useCurrentPlaylist';
import { useAppSelector } from '../../reduce/hooks';
import { CurrentPlaylistTypes } from '../../type';

interface LinkNavItemProps {
  name: string;
  path: string;
}

const LinkNavItems: Array<LinkNavItemProps> = [
  { name: 'Home', path: '/home' },
  { name: 'Playlist', path: '/playlist' },
];

export default function Sidebar() {
  const [getCurrentPlaylist] = useCurrentPlaylist();

  const { current } = useAppSelector((state) => state.playlist);

  useEffect(() => {
    getCurrentPlaylist();
  }, []);

  const activeClassName = 'text-black font-medium text-base';

  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 overflow-auto hover:overflow-scroll h-screen">
      <div className="flex flex-row py-4 mb-8">
        <img className="w-20" src={CatLogo} alt="cat" />
        <h1 className="items-center pt-3.5 font-bold">Mhmmdvg</h1>
      </div>
      {LinkNavItems.map((item) => (
        <div key={item.name} className="mx-6 mb-2">
          <h3 className="mb-2 p-1.5 text-base font-medium inline-block text-gray-400 hover:text-black transition-all duration-280 cursor-pointer">
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
              to={item.path}
            >
              {item.name}
            </NavLink>
          </h3>
        </div>
      ))}
      <div className="mb-10 px-8">
        <hr />
      </div>
      {current.map((playlist: CurrentPlaylistTypes) => (
        <div className="mb-10" key={playlist.id}>
          <h3 className="mx-6 mb-2 text-base text-gray-400 tracking-widest hover:text-black transition-all duration-280 cursor-pointer">
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
              to={`/playlist/${playlist.id}`}
            >
              {' '}
              {playlist.name}{' '}
            </NavLink>
          </h3>
        </div>
      ))}
    </div>
  );
}
