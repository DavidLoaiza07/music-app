import { RiHeart3Fill } from "react-icons/ri"
import React, { useEffect } from "react";
import "./index.css";
import axios from "axios";

const AddFavorite = () => {

    // const [favSongs, setFavSongs] = useState([]);
    // const token = localStorage.getItem("token");

    // };
  
    useEffect(() => {
        const token = localStorage.getItem("token");
            const tokenConfig = {
      headers: { Authorization: "Bearer " + token }}
      
      axios
        .put("https://api.spotify.com/v1/me/tracks", tokenConfig)
        // .then((response) => setFavSongs(response.data.items));
    }, []);
  

  return (
    <div className="addFavorite__container">
        <RiHeart3Fill className="addFavorite__container__button" />
    </div>
  )
}

export default AddFavorite;



