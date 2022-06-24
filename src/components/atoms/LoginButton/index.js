import React from "react";
import "./index.css";

export const getTokenFromURL = () => {
  return (
    window.location.hash
      //retorna el ancla de una URL (todo lo que vienes despues de #)
      .substring(1)
      //extrae el primer caracter e imprime el resto del string hasta el final.
      .split("&")
      //divide el string en un array de strings, mediante la separación del argumento. ejm: ("&")
      .reduce((initial, item) => {
        //#accessToken=asdfdfgsdfsd&name=javascriptpractice
        //ejecuta una funcion reductora sobre cada elemento del array de strings
        //da como resultado un solo valor.
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
      }, {})
  );
};

const endpoint = "https://accounts.spotify.com/authorize";
const clientID = "1d6243a02de9450e88cc633bed695955";
const redirectUri = "http://localhost:3000/mainPage";
const scopes = [
  "user-modify-playback-state",
  "user-modify-playback-state",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-read-email",
  "user-library-read"
];

const loginURL = `${endpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&show_dialog=true`;

export const LoginButton = () => {
  return (
    <a className="login__button" href={loginURL}>
      Login with Spotify
    </a>
  );
};


