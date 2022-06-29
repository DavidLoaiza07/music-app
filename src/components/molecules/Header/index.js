import { FaSearch, FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import {selectUser} from "../../../features/UserSlice/index";
import LogoutButton from "../../atoms/LogOutButton";
import "./index.css";

const Header = () => {
  const user = useSelector(selectUser);
  return (
    <header className="body__container__header">
      <section className="body__container__header__left">
        <FaSearch className="body__container__header__left__icon" title="Search" />
        <input
          className="body__container__header__left__input"
          type="text"
          placeholder="Search for Artists, Songs, or other"
        />
      </section>
      <section className="body__container__header__right">
        <FaUserCircle className="body__container__header__left__icon" />
        <h4 className="body__container__header__right__user">{user?.display_name}</h4>
        <LogoutButton />
      </section>
    </header>
  );
};

export default Header;
