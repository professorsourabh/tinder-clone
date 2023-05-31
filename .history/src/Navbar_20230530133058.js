import React from 'react';
import tinderLogo from "./tinder.png";
import "./Navbar.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';

function Navbar() {
  return (
    <div className='header'>
        <PersonIcon fontSize='large'/>
        <img className='img' src={tinderLogo} alt="icon" />
        <ForumIcon fontSize='large'/>
      
    </div>
  )
}

export default Navbar
