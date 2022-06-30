import AddFavoriteButton from "../../atoms/AddFavoriteButton";
import "./index.css";

const SongRow = (props) => {
  const { track } = props;
  
  return (
    <div className="songRow__container">
      <picture className="songRow__container__pictureContainer">
        <img className="songRow__container__picture" src={track.album.images[0].url} alt="album" />
      </picture>
      <section className="songRow__container__songInfo">
        <h4>{track.name}</h4>
        <p className="songRow__container__songInfo__moreInfo">
          {track.artists.map((artist) => artist.name).join(", ")}
          {/* {track.album.name} */}
        </p>
      </section>
        <AddFavoriteButton className="songRow__container__addSong"
        trackId={track.id} unfavorite={props.unfavorite} setFavSongs={props.setFavSongs}
        /> 
    </div> 
  );  
}; 

export default SongRow;
