import { RiHeart3Fill } from 'react-icons/ri';
import React from 'react';
import './index.css';
import AddTrackToSavedLibrary from '../../../features/AddTrackToSavedLibrary';
import DeleteTrackFromSavedLibrary from '../../../features/DeleteTrackFromSavedLibrary';

const AddFavoriteButton = (props) => {
  const { trackId } = props;

  return (
    <div className='addFavoritecontainer'>
      <RiHeart3Fill
        className='addFavoritecontainer__button'
        onClick={() => {
          if (props.unfavorite) {
            DeleteTrackFromSavedLibrary(trackId, props.setFavSongs)
          } else {
            AddTrackToSavedLibrary(trackId);
          }
        }}
      /> 
    </div>
  );
}; 

export default AddFavoriteButton;