import React from 'react';
import "./Swipebutton.css";
import { Replay, Close, StarRate, Favorite, FlashOn } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const Swipebutton = () => {
  return (
    <div className='Swipebuttons'>
      <IconButton sx={{ bgcolor: 'white', boxShadow: '0px 10px 53px 0px rgba(0,0,0,0.3) !important', padding: '3vh !important', color: '#e6b633' }}>
        <Replay fontSize='large' />
      </IconButton>
      <IconButton sx={{ padding: '3vh !important', color: '#ee1212' }}>
        <Close fontSize='large' />
      </IconButton>
      <IconButton sx={{ padding: '3vh !important', color: '#12eb0ede' }}>
        <StarRate fontSize='large' />
      </IconButton>
      <IconButton sx={{ padding: '3vh !important', color: '#11ed7fe5' }}>
        <Favorite fontSize='large' />
      </IconButton>
      <IconButton sx={{ padding: '3vh !important', color: '#c812d1' }}>
        <FlashOn fontSize='large' />
      </IconButton>
    </div>
  );
}

export default Swipebutton;
