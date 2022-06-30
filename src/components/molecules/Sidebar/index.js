import { useState } from "react";
import {
  RiHeart3Fill,
  RiHome2Fill,
  RiMenuFill,
  RiPlayListFill,
  RiMusic2Fill,
} from "react-icons/ri";
import Images from "../../../utils/Images/index";
import LogoutButton from "../../atoms/LogOutButton";
import "./index.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        style={{ width: isOpen ? "300px" : "55px" }}
        className="sidebar__container"
      >
        <RiMenuFill
          onClick={toggle}
          // style={{ display: isOpen ? "block" : "none" }}
          className="sidebar__container__image"
        />
        <nav
          className="sidebar__container__menu"
          style={{ marginLeft: isOpen ? "10px" : "0px" }}
        >
          <RiHome2Fill
            className="sidebar__container__menu__options__icon"
            title="Home"
          />
          <a
            className="sidebar__container__menu__options"
            href="/mainPage"
            style={{ display: isOpen ? "flex" : "none" }}
          >
            Home
          </a>

          <RiPlayListFill
            className="sidebar__container__menu__options__icon"
            title="Library"
          />
          <a
            className="sidebar__container__menu__options"
            href="/playlist"
            style={{ display: isOpen ? "flex" : "none" }}
          >
            Your Library
          </a>

          <RiHeart3Fill
            className="sidebar__container__menu__options__icon"
            title="Favorites"
          />
          <a
            className="sidebar__container__menu__options"
            href="/favorites"
            style={{ display: isOpen ? "flex" : "none" }}
          >
            Favorites
          </a>

          {/* <span
            className="sidebar__container__menu__subtitle"
            title="Playlist"
            style={{ display: isOpen ? "flex" : "none" }}
          >
            PLAYLISTS
          </span>
          <hr
            className="sidebar__container__menu__line"
            style={{ display: isOpen ? "flex" : "none" }}
          />

          <RiMusic2Fill className="sidebar__container__menu__options__icon" />
          <a
            className="sidebar__container__menu__options"
            href="/playlist"
            style={{ display: isOpen ? "flex" : "none" }}
          >
            Mi lista n.º 1
          </a> */}
          <hr
            className="sidebar__container__menu__line"
            style={{ display: isOpen ? "flex" : "none" }}
          />
          <LogoutButton />
          <p className="sidebar__container__menu__options"
          style={{ display: isOpen ? "flex" : "none" }}
          >
            Logout
          </p>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
