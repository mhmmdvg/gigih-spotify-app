import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useCurrentPlaylist } from '../../hooks/useCurrentPlaylist';
import useSearch from '../../hooks/useSearch';
import { useAppSelector } from '../../reduce/hooks';
import { CurrentPlaylistTypes } from '../../type';

import DropDown from '../dropdown/DropDown';
import SearchForm from '../search-form/SearchForm';

export default function Header() {
  const [handleSearch, searchTrack] = useSearch();
  const [getCurrentPlaylist] = useCurrentPlaylist();

  const location = useLocation();
  const { current } = useAppSelector((state) => state.playlist);

  useEffect(() => {
    getCurrentPlaylist();
  });

  return (
    // <div className="flex justify-between pb-2 px-6 bg-gray-50 border-b border-gray-200 space-x-5">
    <>
      <div className="flex justify-between pb-2 px-6 space-x-5">
        {location.pathname === '/home' ? (
          <SearchForm onChange={handleSearch} onSubmit={searchTrack} />
        ) : undefined}
        {current.map((item: CurrentPlaylistTypes) => (
          <div key={item.id}>
            {location.pathname === `/playlist/${item.id}` ? <div /> : undefined}
          </div>
        ))}

        <DropDown />
      </div>
      <Outlet />
    </>
  );
}
