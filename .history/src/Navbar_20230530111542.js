import React from 'react';
import "./Navbar.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
function Navbar() {
  return (
    <div className='header'>
        <PersonIcon/>
        <img src="/public/tinder.jpg" alt="icon" />
        <ForumIcon/>
      
    </div>
  )
}

export default Navbar
