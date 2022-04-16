import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import AuthSpotify from '../pages/auth/AuthSpotify';
import Home from '../pages/home/Home';

function AppRoutes() {
  const { token } = useSelector((state: RootStateOrAny) => state.auth);

  return (
    <Routes>
      <Route
        path="/home"
        element={token ? <Home /> : <Navigate to="/" replace />}
      />
      {/* <Route path="/home">{token ? <Home /> : <Redirect to="/" />}</Route> */}
      {/* <Route path="/">
        {token ? <Redirect to="/home" /> : <AuthSpotify />}
      </Route> */}
      <Route
        path="/"
        element={token ? <Navigate to="/home" replace /> : <AuthSpotify />}
      />
    </Routes>
  );
}

export { AppRoutes };
