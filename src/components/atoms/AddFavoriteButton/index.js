import { useState } from "react";
import { RiHeart3Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import SpotifyWebApi from "spotify-web-api-js";
import AddTrackToSavedLibrary from "../../../features/AddTrackToSavedLibrary";
import DeleteTrackFromSavedLibrary from "../../../features/DeleteTrackFromSavedLibrary";
import { DELETE_FAVORITE, selectFavorites, SET_FAVORITE } from "../../../features/Favorites/FavoritesSlice";
import { SET_PLAYLIST } from "../../../features/PlaylistSlice";
import "./index.css";


// const spotify = new SpotifyWebApi();



const AddFavoriteButton = (props) => {
  const { trackId } = props;
  const favList = useSelector(selectFavorites);
  // spotify
  //   .getPlaylist("2ThpgQyy0f6Ix1HZ8FYDN1")
  //   .then((playlist) => dispatch(SET_PLAYLIST(playlist)));

  const dispatch = useDispatch();

  // const [dirty, setDirty] = useState(1);
   
  
  const toggleFav = () => {
    if (favList[trackId]) {
      DeleteTrackFromSavedLibrary(trackId, props.setFavSongs);
      dispatch(DELETE_FAVORITE({trackId}))
      
    } else {
      AddTrackToSavedLibrary(trackId);
      dispatch(SET_FAVORITE({trackId}))
    }
  };

//   function getFavoritedTracks() {
//     const a = spotify.playlist.map(track => {if(favList.some(fav => track.id === favList.id)){
//       return track
//     }
//   return}
//     )
//     console.log(a)
// } 


  return (
    <div
      className={
        "addFavoritecontainer " +
        (props.className || "") +
        (favList[trackId] ? " highlight " : "")
      }
    >
      <RiHeart3Fill
        className="addFavoritecontainer__button"
        onClick={toggleFav}
      />
    </div>
  );
};

export default AddFavoriteButton;
