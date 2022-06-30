import axios from "axios";

import SpotifyWebApi from "spotify-web-api-js";

const AddTrackToSavedLibrary = async (idSong) => {
  const token = localStorage.getItem("token");

  await axios
    .put(
      'https://api.spotify.com/v1/me/tracks',
      { ids: [idSong] },

      {
        headers: { Authorization: "Bearer " + token }
      }

    )
    .then(() => {
      console.log("Song added to Favorites");
    })

    .catch((error) => {
      console.log(error);
    });

  // con la api de spotify

  // const token = localStorage.getItem("token");
  // const tokenConfig = {
  //   header: { Authorization: "Bearer" + token },
  // };

  // const spotify = new SpotifyWebApi();

  // await spotify.removeFromMySavedTracks([idSong]);
  // axios
  //   .put("https://api.spotify.com/v1/me/tracks", { ids: [idSong] }, tokenConfig)
  //   .then((response) => setFavSongs(response.data.items))
  //   .catch((error) => console.log(error));
};

export default AddTrackToSavedLibrary;
