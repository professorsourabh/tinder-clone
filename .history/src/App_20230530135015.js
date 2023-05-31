import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    
    <Router>
    <Navbar/>
    </Router>
    </div>
  );
}

export default App;
