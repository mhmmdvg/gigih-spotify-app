import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../reduce/hooks';

// const useAuth = () => {
//   const token = localStorage.getItem('access_token');

//   if (token) {
//     return true;
//   }
//   return false;
// };

function ProtectedRoutes() {
  const { token } = useAppSelector((state) => state.auth);

  const useAuth = () => {
    if (token) {
      return true;
    }
    return false;
  };

  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/auth" />;
}

export default ProtectedRoutes;
