import React from 'react';
import tinderLogo from "./tinder.png";
import "./Navbar.css";
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowBackIos } from '@mui/icons-material';

function Navbar({ backButton }) {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(backButton);
  };

  return (
    <div className='header'>
      {backButton ? (
        <IconButton onClick={handleBackButtonClick}>
          <ArrowBackIos className='back_icon' fontSize='large' />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className='person_icon' fontSize='large' />
        </IconButton>
      )}
      <Link to="/">
        <img className='img' src={tinderLogo} alt="icon" />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className='message_icon' fontSize='large' />
        </IconButton>
      </Link>
    </div>
  );
}

export default Navbar;
