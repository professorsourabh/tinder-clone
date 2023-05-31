import React from 'react';
import tinderLogo from "./tinder.png";
import "./Navbar.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import { Link,useHistory } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

function Navbar(backButton) {
  const history=useHistory();
  return (
    <div className='header'>
      {backButton?(<IconButton onClick={()=>history.replace(backButton)}>
         <ArrowBack className='back_icon' fontSize='large'/>
         </IconButton>
      ):(<IconButton>
        <PersonIcon className='person_icon' fontSize='large'/>
        </IconButton>)}
      {/* <Link to="/profile">
      
        </Link > */}
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
