import { useEffect } from "react";
import {
  RiHeart3Fill,
  RiHome2Fill,
  RiLogoutBoxLine,
  RiPlayListFill
} from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";
import SidebarButton from "../../atoms/SidebarButton";
import "./index.css";

const Sidebar = () => {  
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/mainPage", { replace: true });
  };
  const goPlaylist = () => {
    navigate("/playlist", { replace: true });
  };
  const goFavorites = () => {
    navigate("/favorites", { replace: true });
  };
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  const location = useLocation();

  useEffect(() => {
    console.log("Location changed", location);
  }, [location]);

  return (
    <>
      <div className="sidebar__container">
        <nav className="sidebar__container__menu">
          <SidebarButton highlight={location.pathname==="/mainPage"} onClick={goHome}>
            <RiHome2Fill  />
          </SidebarButton>
          <SidebarButton highlight={location.pathname==="/playlist"} onClick={goPlaylist}>
            <RiPlayListFill />
          </SidebarButton>
          <SidebarButton highlight={location.pathname==="/favorites"} onClick={goFavorites}>
            <RiHeart3Fill />
          </SidebarButton>
          <SidebarButton onClick={logout}>
            <RiLogoutBoxLine />
          </SidebarButton>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
