import React from "react";
import { useNavigate } from "react-router-dom";
import { RiHome2Fill } from "react-icons/ri";


const HomeButton = () => {
  let navigate = useNavigate();

  const goHome = () => {
    localStorage.getItem("token");
    navigate("/login", { replace: true });
  };

  return (
      <RiHome2Fill
        onClick={goHome}
        type="button"
        className="sidebarButton"
      />
    
  );
};

export default HomeButton;
