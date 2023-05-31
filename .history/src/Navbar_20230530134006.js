import React from 'react';
import tinderLogo from "./tinder.png";
import "./Navbar.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
function Navbar() {
  return (
    <div className='header'>
      <IconButton>
      <PersonIcon className='person_icon' fontSize='large'/>
      </IconButton>
        
        <img className='img' src={tinderLogo} alt="icon" />
        <IconButton>
        <ForumIcon className='message_icon' fontSize='large'/>
      </IconButton>
        
      
    </div>
  )
}

export default Navbar
