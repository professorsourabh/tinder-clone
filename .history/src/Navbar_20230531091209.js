import React from 'react';
import tinderLogo from "./tinder.png";
import "./Navbar.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='header'>
      <Link to="/profile">
      <IconButton>
      <PersonIcon className='person_icon' fontSize='large'/>
      </IconButton>
        </Link >
        <Link to="/">
        <img className='img' src={tinderLogo} alt="icon" />
        </Link>
        <Link to="/chat">
        <IconButton>
        <ForumIcon className='message_icon' fontSize='large'/>
      </IconButton>
      </Link>
        
      
    </div>
  )
}

export default Navbar
