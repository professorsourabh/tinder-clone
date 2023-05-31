import React from 'react';
import "./Swipebutton.css";
import { Replay } from '@mui/icons-material';
import { Close } from '@mui/icons-material';
import { StarRate } from '@mui/icons-material';
import { Favorite } from '@mui/icons-material';
import { FlashOn } from '@mui/icons-material';
import { IconButton } from '@mui/material';
const Swipebutton = () => {
  return (
    <div className='Swipebuttons'>
      <IconButton className='Swipebuttons_repeat'><Replay fontSize='large'></Replay></IconButton>
      <IconButton className='Swipebuttons_left'><Close fontSize='large'></Close></IconButton>
      <IconButton className='Swipebuttons_star'><StarRate fontSize='large'></StarRate></IconButton>
      <IconButton className='Swipebuttons_right'><Favorite fontSize='large'></Favorite></IconButton>
      <IconButton className='Swipebuttons_lightning'><FlashOn fontSize='large'></FlashOn></IconButton>
      </div>
  )
}

export default Swipebutton


//Another way to use designing the button style
// import React from 'react';
// import "./Swipebutton.css";
// import { Replay, Close, StarRate, Favorite, FlashOn } from '@mui/icons-material';
// import { IconButton } from '@mui/material';

// const Swipebutton = () => {
//   return (
//     <div className='Swipebuttons'>
//       <IconButton sx={{ bgcolor: 'white', boxShadow: '0px 10px 53px 0px rgba(0,0,0,0.3) !important', padding: '3vh !important', color: '#e6b633' }}>
//         <Replay fontSize='large' />
//       </IconButton>
//       <IconButton sx={{ padding: '3vh !important', color: '#ee1212' }}>
//         <Close fontSize='large' />
//       </IconButton>
//       <IconButton sx={{ padding: '3vh !important', color: '#12eb0ede' }}>
//         <StarRate fontSize='large' />
//       </IconButton>
//       <IconButton sx={{ padding: '3vh !important', color: '#11ed7fe5' }}>
//         <Favorite fontSize='large' />
//       </IconButton>
//       <IconButton sx={{ padding: '3vh !important', color: '#c812d1' }}>
//         <FlashOn fontSize='large' />
//       </IconButton>
//     </div>
//   );
// }

// export default Swipebutton;
