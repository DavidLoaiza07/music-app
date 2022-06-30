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

const MainPage = () => {
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
      spotify
        .getPlaylist("2ThpgQyy0f6Ix1HZ8FYDN1")
        .then((playlist) => dispatch(SET_PLAYLIST(playlist)));
    }
  }, []);

  return (
    <>
      <SpotifyBody />
      {/* <Footer /> */}
    </>
  );
};

export default MainPage;