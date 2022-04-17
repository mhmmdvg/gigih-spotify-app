import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Auth from '../pages/auth/AuthSpotify';
import Home from '../pages/home/Home';

export default function AppRoutes() {
  const { token } = useSelector((state: RootStateOrAny) => state.auth);

  return (
    <Routes>
      <Route path="/home" element={token ? <Home /> : <Navigate to="/" />} />
      <Route path="/" element={token ? <Navigate to="/home" /> : <Auth />} />
    </Routes>
  );
}
