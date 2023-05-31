import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import TinderCards from './TinderCards';
import Swipebutton from './Swipebutton';
function App() {
  return (
    <div className="App">
      <Router>
    <Navbar/>
    
    
    
    <Routes>
      
      <Route path="/" element={<TinderCards />}/>
      <Route path="/chat" element={<Chats />}/>
    </Routes>
    <Swipebutton/>
    </Router>
    </div>
  );
}

export default App;
