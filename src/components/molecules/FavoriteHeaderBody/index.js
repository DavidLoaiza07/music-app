import { useSelector } from "react-redux";
import { selectPlaylist } from "../../../features/PlaylistSlice/index";
import Images from "../../../utils/Images";
import './index.css';

const FavoriteHeaderBody = () => {
  const playlist = useSelector(selectPlaylist);
  return (
    <div className="headerBody__container">
      <figure>
        <img
          className="favoriteHeaderBody__container__img"
          src={Images.img2}
          alt="Favoritos"
        />
      </figure>
      <section className="headerBody__container__playlistInfo">
        <h2 className="headerBody__container__playlistInfo__title">Favoritos</h2>
      </section>
    </div>
  );
};

export default FavoriteHeaderBody;
