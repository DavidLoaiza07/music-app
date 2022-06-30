import axios from "axios";
import SpotifyWebApi from "spotify-web-api-js";

const DeleteTrackFromSavedLibrary = async (idSong, setFavSongs) => {
  const token = localStorage.getItem("token");
  const tokenConfig = {
    headers: { Authorization: "Bearer " + token },
  };

  const spotify = new SpotifyWebApi();

  await spotify.removeFromMySavedTracks([idSong]);
  axios
    .get("https://api.spotify.com/v1/me/tracks", tokenConfig)
    .then((response) => setFavSongs(response.data.items))
    .catch((error) => console.log(error));
};


export default DeleteTrackFromSavedLibrary;
