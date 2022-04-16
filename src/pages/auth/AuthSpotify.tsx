import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/button/Button';
import { setToken } from '../../redux/slice';

const { REACT_APP_CLIENT_ID } = process.env;
const SCOPES = 'playlist-modify-private';
const REDIRECT_URI = 'http://localhost:3000/';

export default function AuthSpotify() {
  const dispatch = useDispatch();

  const redirectToSpotify = () => {
    const loginUrl = `https://accounts.spotify.com/authorize?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=token&show_dialog=true`;

    window.location.href = loginUrl;
  };

  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);
      const token = params.get('access_token');
      if (token) {
        dispatch(setToken(token));
      }
    }
  });

  return (
    <div className="auth-wrap">
      <Button onClick={redirectToSpotify}>Login Spotify</Button>
    </div>
  );
}
