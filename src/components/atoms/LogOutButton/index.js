import React from 'react';
import './index.css';
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {

    let navigate = useNavigate();

 const removeToken = () => {

    localStorage.removeItem("token");
    navigate("/login", { replace: true });
 }
    
        
      
    
  return (
    <button className="logoutButton" onClick={removeToken} type="button"  >
      Logout
    </button>
  )
}

export default LogoutButton