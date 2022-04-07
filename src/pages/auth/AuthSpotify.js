import React, { useEffect } from "react";
import "./auth.css";
import Button from "../../components/button/Button";

import { useDispatch } from "react-redux";
import { tokenAuth } from "../../redux/actions";
import { redirectToSpotify } from "./authFunction";

export default function AuthSpotify() {
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      console.log(token);
      dispatch(tokenAuth(token));
    }
  });

  return (
    <>
      <div className="auth-wrap">
        <Button onClick={redirectToSpotify}>Login Spotify</Button>
      </div>
    </>
  );
}
