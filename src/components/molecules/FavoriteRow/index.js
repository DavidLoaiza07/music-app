import React, { useEffect, useState } from "react";
import { favoriteSongs } from "../../../features/FavoriteSlice";

const FavoriteRow = () => {
  const [favSongs, setFavSongs] = useState();

  useEffect(() => {
    setFavSongs(favoriteSongs());
  }, []);

  console.log(favSongs)
  return (
    <>
      {favSongs
        ? 'si hay favs'
        : "no hay favoritos"}
    </>
  );
};

export default FavoriteRow;
