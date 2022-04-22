import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useCurrentPlaylist } from '../../hooks/useCurrentPlaylist';
import useSearch from '../../hooks/useSearch';

import DropDown from '../dropdown/DropDown';
import SearchForm from '../search-form/SearchForm';

export default function Header() {
  const [handleSearch, searchTrack] = useSearch();
  const [currentPlaylist] = useCurrentPlaylist();
  const location = useLocation();

  return (
    // <div className="flex justify-between pb-2 px-6 bg-gray-50 border-b border-gray-200 space-x-5">
    <>
      <div className="flex justify-between pb-2 px-6 space-x-5">
        {location.pathname === '/home' ? (
          <SearchForm onChange={handleSearch} onSubmit={searchTrack} />
        ) : undefined}
        {currentPlaylist.map((item) => (
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
