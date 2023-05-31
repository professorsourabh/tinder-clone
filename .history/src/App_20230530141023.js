import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import TinderCards from './TinderCards';
function App() {
  return (
    <div className="App">
      <Router>
    <Navbar/>
    
    
    
    <Routes>
      
      <Route path="/" element={<Router />}/>
      
    </Routes>
    </Router>
    </div>
  );
}

export default App;
