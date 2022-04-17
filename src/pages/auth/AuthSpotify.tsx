import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/button/Button';
import { setToken } from './authSlice';

const { REACT_APP_CLIENT_ID } = process.env;
const SCOPES = 'playlist-modify-private';
const REDIRECT_URI = 'http://localhost:3000/';

export default function Auth() {
  const dispatch = useDispatch();

  const login = () => {
    const loginUrl = `https://accounts.spotify.com/authorize?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=token&show_dialog=true`;
    window.location.href = loginUrl;
  };

  useEffect(() => {
    const hash = window.location.hash.substring(1).split('&')[0].split('=');

    if (hash[0] === 'access_token') {
      dispatch(setToken(hash[1]));
    }
  });

  return (
    <div className="auth-wrap">
      <Button onClick={login}>Login Spotify</Button>
    </div>
  );
}
