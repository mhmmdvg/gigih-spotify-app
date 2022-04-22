import React from 'react';
import { Outlet } from 'react-router-dom';
import Rightbar from './Rightbar';
// import Header from './Header';

import Sidebar from './Sidebar';

export default function SidebarLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto hover:overflow-scroll h-screen">
        <Outlet />
      </div>
      <Rightbar />
    </div>
  );
}
