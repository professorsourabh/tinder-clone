import React from 'react';
import "./tinder.png";
import "./Navbar.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
function Navbar() {
  return (
    <div className='header'>
        <PersonIcon/>
        <img src="https://www.vecteezy.com/png/21460424-tinder-logo-transparent-png" alt="icon" />
        <ForumIcon/>
      
    </div>
  )
}

export default Navbar
