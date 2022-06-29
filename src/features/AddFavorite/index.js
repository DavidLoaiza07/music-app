import React from 'react';
import axios from 'axios';

const AddFavorite = (idSong: string) => {

    return async () => {
        const token = localStorage.getItem("token");
        if (token !== undefined || token !== null) {
            await axios.put("https://api.spotify.com/v1/me/tracks", {ids: [idSong]},
            {headers: { Authorization: "Bearer " + token }})
            .then()
            .cath(() => {
                swal.fire('Error', 'Error to add this song', 'error');
            });

                
        }}
}

export default AddFavorite