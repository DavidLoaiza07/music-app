import { createSlice } from "@reduxjs/toolkit";
import { requestFavoritesFromSpotify } from "../../../services/SpotifyApi";

export const favoriteSlice = createSlice({
    name: "favorites",
    initialState: {favorites:{}},
    reducers: {
        SET_FAVORITE: (state, action) => {
            state.favorites[action.payload.trackId] = 1;
        },
        DELETE_FAVORITE: (state, action) => {
            let temp = {...state.favorites};
            delete temp[action.payload.trackId];
            state.favorites = {...temp} 
        },   
        COMPLETE_FAVORITE: (state, action) => {
            state.favorites= {...action.payload.favorites}
        }

    }
})

export const { SET_FAVORITE, DELETE_FAVORITE, COMPLETE_FAVORITE } = favoriteSlice.actions;
export const selectFavorites = (state) => state.favorites.favorites;



export const requestFavorites = () => {
    return requestFavoritesFromSpotify() 
    .then((response) => {
        return response.data.items;
    });
}





export default favoriteSlice.reducer;