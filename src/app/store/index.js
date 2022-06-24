import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../features/UserSlice/index";
import tokenReducer from "../../features/TokenSlice/index";
import playlistReducer from "../../features/PlaylistSlice/index";

export default configureStore({
    reducer: {
        user: userReducer,
        token: tokenReducer,
        playlist: playlistReducer,
    }
})