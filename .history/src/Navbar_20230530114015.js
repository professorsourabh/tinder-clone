import React from 'react';
import tinderLogo from "./tinder.png";
import "./Navbar.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { Margin } from '@mui/icons-material';
function Navbar() {
  return (
    <div className='header'>
        <PersonIcon style={Margin}/>
        <img src={tinderLogo} alt="icon" />
        <ForumIcon/>
      
    </div>
  )
}

export default Navbar
