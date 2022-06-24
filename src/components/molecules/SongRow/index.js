import "./index.css";

const SongRow = ({ track }) => {
  return (
    <div className="songRow__container">
      <picture className="songRow__container__pictureContainer">
        <img className="songRow__container__picture" src={track.album.images[0].url} alt="album" />
      </picture>
      <section className="songRow__container__songInfo">
        <h4>{track.name}</h4>
        <p className="songRow__container__songInfo__moreInfo">
          {track.artists.map((artist) => artist.name).join(", ")}
          {track.album.name}
        </p>
      </section>
    </div>
  ); 
};

export default SongRow;
