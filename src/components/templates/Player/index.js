import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromURL } from "../../../components/atoms/LoginButton";
import { SET_PLAYLIST } from "../../../features/PlaylistSlice";
import { selectToken, SET_TOKEN } from "../../../features/TokenSlice";
import { selectUser, SET_USER } from "../../../features/UserSlice";
import Footer from "../../molecules/Footer/index";
import SpotifyBody from "../../molecules/SpotifyBody/index";
import "./index.css";

const spotify = new SpotifyWebApi();
console.log(spotify);

const Player = () => {
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
      console.log(token);
      spotify
        .getPlaylist("6NKqY7Dj56DgR65KjbGkRd")
        .then((playlist) => dispatch(SET_PLAYLIST(playlist)));
    }
  }, [dispatch]);

  return (
    <>
      {/* {token ? (
        <>
      <SpotifyBody />
      <Footer />  
      </>    ) : (
        <Navigate to="/login" replace /> 

      )} */}
      <SpotifyBody />
      <Footer />
    </>
  );
};

export default Player;
