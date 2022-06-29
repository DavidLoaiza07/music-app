import React, { useEffect, useState } from "react";
import axios from "axios";
import './index.css';

const FavoriteRow = () => {
  const [favSongs, setFavSongs] = useState([]);
  const token = localStorage.getItem("token");
  const tokenConfig = {
    headers: { Authorization: "Bearer " + token },
  };

  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/me/tracks", tokenConfig)
      .then((response) => setFavSongs(response.data.items))
      .catch((error) => setFavSongs(error.data.items));
  }, []);

  console.log(favSongs);
  return (
    <div>
      {favSongs
        ? favSongs.map((item) => {
            return (
              <div className="favoriteList__container">
            <h3 className="favoriteList__container__list" key={item.id}>{item.track.name}</h3>
            <hr className="favoriteList__container__list__line"/>
            </div>
            );
          })
        : "no songs"}
    </div>
  );
};

export default FavoriteRow;
