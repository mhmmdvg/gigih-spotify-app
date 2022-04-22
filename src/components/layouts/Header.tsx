import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import useSearch from '../../hooks/useSearch';
import DropDown from '../dropdown/DropDown';
import SearchForm from '../search-form/SearchForm';

export default function Header() {
  const [handleSearch, searchTrack] = useSearch();
  const location = useLocation();

  return (
    // <div className="flex justify-between pb-2 px-6 bg-gray-50 border-b border-gray-200 space-x-5">
    <>
      <div className="flex justify-between pb-2 px-6 space-x-5">
        {location.pathname === '/home' ? (
          <SearchForm onChange={handleSearch} onSubmit={searchTrack} />
        ) : undefined}
<<<<<<< HEAD
        {location.pathname === '/playlist' ? <div /> : <div />}
=======

>>>>>>> ff444fbae4f441f2d04be931739ef7a884f10927
        <DropDown />
      </div>
      <Outlet />
    </>
  );
}
