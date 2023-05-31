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
      <Link>
      <IconButton>
      <PersonIcon className='person_icon' fontSize='large'/>
      </IconButton>
        </Link>
        <img className='img' src={tinderLogo} alt="icon" />
        <Link>
        <IconButton>
        <ForumIcon className='message_icon' fontSize='large'/>
      </IconButton>
      </Link>
        
      
    </div>
  )
}

export default Navbar
