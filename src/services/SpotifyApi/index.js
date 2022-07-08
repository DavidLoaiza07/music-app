import axios from 'axios';
import SpotifyWebApi from 'spotify-web-api-js';
import { getTokenFromURL } from '../../components/atoms/LoginButton';

export const spotify = new SpotifyWebApi();



const hash = getTokenFromURL();
const token = localStorage.getItem('token') || hash.access_token;

localStorage.setItem("token", token);
spotify.setAccessToken(token);

if(hash.access_token) {
  window.location.hash = "";
}
 
const getTokenConfig = () =>  ({
    headers: { Authorization: 'Bearer ' + spotify.getAccessToken() }
  });
 
export const requestFavoritesFromSpotify = () => {
    return axios
      .get('https://api.spotify.com/v1/me/tracks', getTokenConfig());
}

