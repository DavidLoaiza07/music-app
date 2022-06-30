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
          className="headerBody__container__img"
          src={Images.img2}
          alt="Favoritos"
        />
      </figure>
      <section className="headerBody__container__playlistInfo">
        <h4 className="headerBody__container__playlistInfo__title">Favoritos</h4>
        <h1 className="headerBody__container__playlistInfo__name">
          {playlist?.name}
        </h1>
      </section>
    </div>
  );
};

export default FavoriteHeaderBody;
