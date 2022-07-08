import { useDispatch } from "react-redux";
import {
  COMPLETE_FAVORITE,
  requestFavorites,
} from "../../../features/Favorites/FavoritesSlice";
import { SET_PLAYLIST } from "../../../features/PlaylistSlice";
import { SET_USER } from "../../../features/UserSlice";
import { spotify } from "../../../services/SpotifyApi";
import SpotifyBody from "../../molecules/SpotifyBody/index";
import "./index.css";

const MainPage = () => {
  const dispatch = useDispatch();

  if (spotify.getAccessToken()) {
    spotify.getMe().then((user) => dispatch(SET_USER(user)));
    spotify
      .getPlaylist("2ThpgQyy0f6Ix1HZ8FYDN1")
      .then((playlist) => dispatch(SET_PLAYLIST(playlist)));
    requestFavorites().then((_favorites) => {
      const temp = {};
      _favorites.forEach((favtrack) => {
        temp[favtrack.track.id] = 1;
      });
      dispatch(COMPLETE_FAVORITE({ favorites: temp }));
    });
  }
 
  {
    // if (!spotify.getAccessToken()) return <Navigate to="/login" replace />
  }

  return (
    <>
      <SpotifyBody />
      {/* <Footer /> */}
    </>
  );
};

export default MainPage;
