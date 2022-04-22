import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../reduce/hooks';

function PublicRoutes() {
  const { token } = useAppSelector((state) => state.auth);

  const useAuth = () => {
    if (token) {
      return true;
    }
    return false;
  };
  const auth = useAuth();

  return auth ? <Navigate to="/home" /> : <Outlet />;
}

export default PublicRoutes;
