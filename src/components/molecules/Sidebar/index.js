import {
  RiHeart3Fill,
  RiHome2Fill,
  RiPlayListFill,
  RiSearchLine,
  RiMenuFill
} from "react-icons/ri";
import Images from "../../../utils/Images/index";
import "./index.css";

const Sidebar = () => {

   
  return (
    <>
    <RiMenuFill className="sidebar__container__menuButton" />
    <div className="sidebar__container">
      <figure className="sidebar__container__image">
        <img
          src={Images.img3}
          alt="logo"
          className="sidebar__container__logo"
        />
      </figure>
      <nav className="sidebar__container__menu">
        <a className="sidebar__container__menu__options" href="/mainPage">
          <RiHome2Fill className="sidebar__container__menu__options__icon" title="Home" />
             Home
        </a>

        <a className="sidebar__container__menu__options" href="/playlist">
          <RiPlayListFill className="sidebar__container__menu__options__icon" title="Library" />
             Your Library
        </a>

        <a className="sidebar__container__menu__options" href="/favorites">
          <RiHeart3Fill className="sidebar__container__menu__options__icon" title="Favorites" />
             Favorites
        </a>

        <span className="sidebar__container__menu__subtitle" title="Playlist">
          PLAYLISTS
        </span>
        <hr className="sidebar__container__menu__line" />

        <a className="sidebar__container__menu__options__two" href="/playlist">
           Mi lista n.º 1
        </a>
      </nav>
    </div>
    </>
  );
};

export default Sidebar;
