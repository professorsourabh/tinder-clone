import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TinderCards from './TinderCards';
import Swipebutton from './Swipebutton';
import Chats from './Chats';
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/chat/:person" element={<React.Fragment>
            <Navbar backButton="/chat" />
            <ChatScreen />
            <h3>IT WORKS</h3>
          </React.Fragment>} />
          <Route path="/chat" element={<React.Fragment>
            <Navbar backButton="/" />
            <Chats />
          </React.Fragment>} />
          <Route path="/" element={<React.Fragment>
            <Navbar />
            <TinderCards />
            <Swipebutton />
            
          </React.Fragment>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
