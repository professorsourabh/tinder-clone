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
      <IconButton><Replay fontSize='large'></Replay></IconButton>
      <IconButton><Close fontSize='large'></Close></IconButton>
      <IconButton><StarRate fontSize='large'></StarRate></IconButton>
      <IconButton><Favorite fontSize='large'></Favorite></IconButton>
      <IconButton><FlashOn fontSize='large'></FlashOn></IconButton>
     
      
      
      
      
    </div>
  )
}

export default Swipebutton
