import React from "react";
import { useNavigate } from "react-router-dom";
import { RiPlayListFill } from "react-icons/ri";

const PlaylistButton = () => {
  let navigate = useNavigate();

  const goPlaylist = () => {
    localStorage.getItem("token");
    navigate("/playlist", { replace: true });
  };

  return (
  
      <RiPlayListFill
        onClick={goPlaylist}
        type="button"
        className="sidebarButton"
      />
    
  );
};

export default PlaylistButton;
