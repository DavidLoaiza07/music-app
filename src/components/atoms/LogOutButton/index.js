import React from "react";
import { useNavigate } from "react-router-dom";
import { RiLogoutBoxLine } from "react-icons/ri";
import './index.css'; 
import { spotify } from "../../../services/SpotifyApi";

const LogoutButton = () => {
  let navigate = useNavigate();

  const removeToken = () => {
    localStorage.removeItem("token");
    spotify.removeToken();
    navigate("/login", { replace: true });
  };

  return (
  
      <RiLogoutBoxLine
        onClick={removeToken}
        type="button"
        className="sidebarButton"
      />
    
  );
};

export default LogoutButton;
