import React from 'react';
import "./Swipebutton.css";
import { Replay } from '@mui/icons-material';
import { Close } from '@mui/icons-material';
import { StarRate } from '@mui/icons-material';
import { Favorite } from '@mui/icons-material';
import { FlashOn } from '@mui/icons-material';
const Swipebutton = () => {
  return (
    <div className='Swipebuttons'>
      <Replay fontSize='large'></Replay>
     
      <Close fontSize='large'></Close>
      <StarRate fontSize='large'></StarRate>
      <Favorite fontSize='large'></Favorite>
      <FlashOn fontSize='large'></FlashOn>
    </div>
  )
}

export default Swipebutton
