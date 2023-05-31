import React from 'react';
import "./Swipebutton.css";
import { Replay } from '@mui/icons-material';
import { Close } from '@mui/icons-material';
import { StarRate } from '@mui/icons-material';
import { Favorite } from '@mui/icons-material';
import { FlashOn } from '@mui/icons-material';
import { IconButton } from '@mui/material';
const Swipebutton = () => {
  return (
    <div className='Swipebuttons'>
      <IconButton className='Swipebuttons_repeat'><Replay fontSize='large'></Replay></IconButton>
      <IconButton className='Swipebuttons_left'><Close fontSize='large'></Close></IconButton>
      <IconButton className='Swipebuttons_star'><StarRate fontSize='large'></StarRate></IconButton>
      <IconButton className='Swipebuttons_right'><Favorite fontSize='large'></Favorite></IconButton>
      <IconButton className='Swipebuttons_lightning'><FlashOn fontSize='large'></FlashOn></IconButton>
      </div>
  )
}

export default Swipebutton
