import {
  RiHeart3Fill,
  RiHome2Fill,
  RiPlayListFill,
  RiSearchLine,
} from "react-icons/ri";
import Images from "../../../utils/Images/index";
import "./index.css";

const Sidebar = () => {
  return (
    <div className="sidebar__container">
      <figure className="sidebar__container__image">
        <img
          src={Images.img0}
          alt="logo"
          className="sidebar__container__logo"
        />
      </figure>
      <nav className="sidebar__container__menu">
        <a className="sidebar__container__menu__options">
          <RiHome2Fill title="Home" />
          Home
        </a>

        <a className="sidebar__container__menu__options">
          <RiSearchLine title="Search" />
          Search
        </a>
        <a className="sidebar__container__menu__options">
          <RiPlayListFill title="Library" />
          Your Library
        </a>
        <a className="sidebar__container__menu__options">
          <RiHeart3Fill title="Favorites" />
          Favorites
        </a>
        <span className="sidebar__container__menu__subtitle" title="Playlist">
          PLAYLISTS
        </span>
        <hr className="sidebar__container__menu__line" />
        <h5 className="sidebar__container__menu__options__two">
          Primera playlist
        </h5>

        <h5 className="sidebar__container__menu__options__two">
          Segunda playlist
        </h5>
      </nav>
    </div>
  );
};

export default Sidebar;
