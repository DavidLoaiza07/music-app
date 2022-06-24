import React from 'react';
import Body from '../Body/index';
import Sidebar from '../Sidebar/index';
import './index.css';

const SpotifyBody = () => {
  return (
    <div className='SpotifyBody'>
      <Sidebar />
      <Body />
    </div>

  )
}

export default SpotifyBody;