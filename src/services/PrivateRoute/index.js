import React from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import { getTokenFromURL } from "../../components/atoms/LoginButton";
import MainPage from "../../components/pages/MainPage";
import Favorites from "../../components/templates/Favorites";

const PrivateRoute = ({Component}) => {
    const hash = getTokenFromURL();
    const token = localStorage.getItem('token') || hash.access_token;

  return token ? <Component /> : <Navigate to='/login' replace />
};

// const PrivateRoute = (props) => {
//     const isAuth = localStorage.getItem('token');

//   return (
//   <Route {...props} />
//   );
// }

export default PrivateRoute;
