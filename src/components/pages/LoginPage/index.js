import React from "react";
import Images from "../../../utils/Images";
import { LoginButton } from "../../atoms/LoginButton/index";
import "./index.css";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const token = localStorage.getItem("token");

  {
    if (token) return <Navigate to="/mainPage" replace />;
  }
  return (
    <div className="login__container">
      <figure>
        <img src={Images.img0} alt="logo" className="login__container__logo" />
      </figure>
      <LoginButton />
    </div>
  );
};

export default LoginPage;
