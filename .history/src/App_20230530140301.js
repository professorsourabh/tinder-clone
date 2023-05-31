import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Router>
    
    <Routes>
      
      <Route path="/" element={<h1>Welcome to the Homepage</h1>} />
      <Route path="/chat" element={<h1>Welcome to the chatpage</h1>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
