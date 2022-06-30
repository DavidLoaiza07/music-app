import { useSelector } from "react-redux";
import { selectPlaylist } from "../../../features/PlaylistSlice/index";
import "./index.css";

const HeaderBody = () => {
  const playlist = useSelector(selectPlaylist);
  return (
    <div className="headerBody__container">
      <figure className="headerBody__container__figure">
        <img
          className="headerBody__container__img"
          src={playlist?.images[0]?.url}
          alt=""
        />
      </figure>
      <section className="headerBody__container__playlistInfo">
        <h6 className="headerBody__container__playlistInfo__title">Lista</h6>
        <h3 className="headerBody__container__playlistInfo__name">
          {playlist?.name}
        </h3>
      </section>
    </div> 
  );
};

export default HeaderBody;
