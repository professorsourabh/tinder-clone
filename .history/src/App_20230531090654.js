import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TinderCards from './TinderCards';
import Swipebutton from './Swipebutton';
import Chats from './Chats';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/chat">
            <Navbar backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <>
              <TinderCards />
              <Swipebutton />
              <Navbar />
            </>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
