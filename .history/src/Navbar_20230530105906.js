import React from 'react';
import "./Navbar.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
function Navbar() {
  return (
    <div className='header'>
        <PersonIcon/>
        <ForumIcon/>
      <h1>I am Heading</h1>
    </div>
  )
}

export default Navbar
