import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./app/store/index";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import LoginPage from "./components/pages/LoginPage/index";
import Player from "./components/templates/Player";
import Favorites from "./components/templates/Favorites";
import MainPage from "./components/pages/MainPage";
import { spotify } from "./services/SpotifyApi";

const token = spotify.getAccessToken();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/mainPage" element={<MainPage />} />
          <Route
            path="/mainPage#"
            element={<Navigate to="/mainPage" replace />}
          />
          <Route path="/playlist" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/mainPage" replace />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
