import React from "react";
import { useNavigate } from "react-router-dom";
import { RiLogoutBoxLine } from "react-icons/ri";
import './index.css'; 

const LogoutButton = () => {
  let navigate = useNavigate();

  const removeToken = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
  
      <RiLogoutBoxLine
        onClick={removeToken}
        type="button"
        className="logoutButton"
      />
    
  );
};

export default LogoutButton;
