/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SidebarLayout from '../components/layouts';
import Header from '../components/layouts/Header';
import { useTokenFromSpotifyAuth } from '../hooks/authHooks';
import Auth from '../pages/auth/AuthSpotify';
import DetailPlaylist from '../pages/detail-playlists/DetailPlaylist';
import Home from '../pages/home/Home';
import NotFound from '../pages/NotFound';
import Playlist from '../pages/playlist/Playlist';
import { useAppSelector } from '../reduce/hooks';
import ProtectedRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

export default function AppRoutes() {
  const [getTokenFromSpotifyAuth] = useTokenFromSpotifyAuth();
  const { token } = useAppSelector((state) => state.auth);

  if (!token) {
    getTokenFromSpotifyAuth();
  }

  return (
    <Routes>
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/" element={<SidebarLayout />}>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Navigate to="home" replace />} />
            <Route path="home" element={<Home />} />
            <Route path="playlist" element={<Playlist />} />
            <Route path="playlist/:id" element={<DetailPlaylist />} />
          </Route>
        </Route>
      </Route>

      <Route path="auth" element={<PublicRoutes />}>
        <Route path="/auth" element={<Auth />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
