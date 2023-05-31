import React from 'react';
import "./Swipebutton.css";
import { Replay, Close, StarRate, Favorite, FlashOn } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  repeatButton: {
    backgroundColor: 'white',
    boxShadow: '0px 10px 53px 0px rgba(0,0,0,0.3) !important',
    padding: '3vh !important',
    color: '#e6b633',
  },
  leftButton: {
    padding: '3vh !important',
    color: '#ee1212',
  },
  starButton: {
    padding: '3vh !important',
    color: '#12eb0ede',
  },
  rightButton: {
    padding: '3vh !important',
    color: '#11ed7fe5',
  },
  lightningButton: {
    padding: '3vh !important',
    color: '#c812d1',
  },
});

const Swipebutton = () => {
  const classes = useStyles();

  return (
    <div className='Swipebuttons'>
      <IconButton className={classes.repeatButton}><Replay fontSize='large' /></IconButton>
      <IconButton className={classes.leftButton}><Close fontSize='large' /></IconButton>
      <IconButton className={classes.starButton}><StarRate fontSize='large' /></IconButton>
      <IconButton className={classes.rightButton}><Favorite fontSize='large' /></IconButton>
      <IconButton className={classes.lightningButton}><FlashOn fontSize='large' /></IconButton>
    </div>
  );
}

export default Swipebutton;
