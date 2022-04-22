import { useNavigate } from 'react-router-dom';
import { setToken, setTypeToken } from '../pages/auth/authSlice';
import { useAppDispatch } from '../reduce/hooks';

const getReturnedParamsFromSpotifyAuth = (hash: string) => {
  const stringAfterHastag = hash.substring(1);
  const paramsInUrl = stringAfterHastag.split('&');
  const paramsSplitUp = paramsInUrl.reduce(
    (accumulater: any, currentValue: any) => {
      const [key, value] = currentValue.split('=');
      accumulater[key] = value;
      return accumulater;
    },
    {}
  );
  return paramsSplitUp;
};

export const useTokenFromSpotifyAuth = () => {
  const dispatch = useAppDispatch();
  const getTokenFromSpotifyAuth = async () => {
    if (window.location.hash) {
      /* eslint-disable @typescript-eslint/naming-convention */
      const { access_token, token_type } = getReturnedParamsFromSpotifyAuth(
        window.location.hash
      );

      // localStorage.clear();
      // localStorage.setItem('access_token', access_token);
      // localStorage.setItem('token_type', token_type);
      dispatch(setToken(access_token));
      dispatch(setTypeToken(token_type));
    }
  };
  return [getTokenFromSpotifyAuth];
};

export function useLogin() {
  const redirectSpotifyAuth = (): void => {
    const { REACT_APP_CLIENT_ID, REACT_APP_REDIRECT_URI } = process.env;
    const SCOPES = ['playlist-modify-public', 'playlist-modify-private'];
    console.log(process.env.REACT_APP_REDIRECT_URI);
    // const REDIRECT_URI = 'http://localhost:3000/';
    const loginUrl = `https://accounts.spotify.com/authorize?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URI}&scope=${SCOPES}&response_type=token&show_dialog=true`;
    window.location.href = loginUrl;
  };

  return [redirectSpotifyAuth];
}

export function useLogout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = () => {
    // window.localStorage.removeItem('access_token');
    // window.localStorage.removeItem('token_type');
    dispatch(setToken(''));
    navigate('/auth');
  };

  return [logout];
}
