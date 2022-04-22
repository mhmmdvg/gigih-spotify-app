import React from 'react';
import Button from '../../components/button/Button';
import { useLogin } from '../../hooks/authHooks';

// const { REACT_APP_CLIENT_ID } = process.env;
// const SCOPES = 'playlist-modify-private';
// const REDIRECT_URI = 'http://localhost:3000/';

export default function Auth() {
  const [redirectToSpotifyAuth] = useLogin();

  return (
    <div className="auth-wrap flex flex-col">
      <h1 className="text-4xl font-extrabold mx-2 mb-4">
        Welcome to Create Playlist
      </h1>

      <Button onClick={redirectToSpotifyAuth}>Login Spotify</Button>
    </div>
  );
}
