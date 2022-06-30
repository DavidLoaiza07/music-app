import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';
import SongRow from '../SongRow';

const FavoriteRow = () => {
  const [favSongs, setFavSongs] = useState([]);
  const token = localStorage.getItem('token');
  const tokenConfig = {
    headers: { Authorization: 'Bearer ' + token }
  };

  useEffect(() => {
    axios
      .get('https://api.spotify.com/v1/me/tracks', tokenConfig)
      .then((response) => setFavSongs(response.data.items))
      .catch((error) => setFavSongs(error.data.items));
  }, []);

  return (
    <div>
      {favSongs
        ? favSongs.map((item, index) => {
            return (
              <SongRow track={item.track} key={index} unfavorite setFavSongs={setFavSongs}/>
            );
          }) 
        : 'no songs'}
    </div>
  );
};

export default FavoriteRow;