import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import SpotifyWebApi from "spotify-web-api-js";
import { selectToken, SET_TOKEN } from '../../../features/TokenSlice';
import { selectUser, SET_USER } from '../../../features/UserSlice';
import { getTokenFromURL } from '../../atoms/LoginButton';
import FavoriteCompleteBody from '../../molecules/FavoriteCompleteBody';
import Footer from '../../molecules/Footer';


const spotify = new SpotifyWebApi();
const Favorites = () => {

  const token = useSelector(selectToken) || localStorage.getItem("token");
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = getTokenFromURL();
    const _token = token || hash.access_token;


    if (_token) {
      localStorage.setItem("token", _token);
      dispatch(SET_TOKEN(_token));
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => dispatch(SET_USER(user)));
    }
  }, []);
  return (
    <div>
      <FavoriteCompleteBody />
      {/* <Footer /> */}
    </div>
  )
}

export default Favorites; 