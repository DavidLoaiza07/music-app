import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store/index";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import LoginPage from "./components/pages/LoginPage/index";
import Player from "./components/templates/Player";
import Favorites from "./components/templates/Favorites";
import MainPage from "./components/pages/MainPage";
import PrivateRoute from "./services/PrivateRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mainPage" element={<PrivateRoute Component={MainPage} />} /> 
        <Route path="/favorites" element={<PrivateRoute Component={Favorites} />} /> 
        <Route path="/playlist" element={<PrivateRoute Component={Player} />} /> 

 



        {/* <Route path="/login" element={<LoginPage />} />
        <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/mainPage' element={<MainPage/>}/>
        </Route>
        <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/playlist' element={<Player/>}/>
        </Route>
          <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/favorites' element={<Favorites/>}/>
        </Route>
        <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='*' element={<MainPage/>}/>
        </Route> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
