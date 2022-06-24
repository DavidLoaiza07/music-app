import axios from "axios";

export const favoriteSongs = async () => {
  const token = localStorage.getItem("token");
  const tokenConfig = {
    headers: { Authorization: "Bearer " + token },
  };
  const request = await axios.get(
    "https://api.spotify.com/v1/me/tracks",
    tokenConfig
  )
  let data = request.data;
  return data;
//   console.log(request.data.items[0].track.name);
//   console.log(request.data.items[1].track.name);
//   console.log(request.data.items[2].track.name);
//   console.log(request.data.items[3].track.name);

  
};
