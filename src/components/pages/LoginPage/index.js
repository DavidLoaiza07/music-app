import React from "react";
import Images from "../../../utils/Images";
import { getTokenFromURL, LoginButton } from "../../atoms/LoginButton/index";
import "./index.css";
import { Navigate } from "react-router-dom";
import Button from "../../atoms/Button";

const LoginPage = () => {
  const hash = getTokenFromURL();
    const token = localStorage.getItem('token') || hash.access_token;

  {
    if (token) return <Navigate to="/mainPage" replace /> 
  }
  return (
    <div className="login__container">
      <figure>
        <img src={Images.img3} alt="logo" className="login__container__logo" />
      </figure>
      {/* <Button tag='button' text='Esto es un boton'/> */}
      <LoginButton />
    </div>
  );
};
 
export default LoginPage;
