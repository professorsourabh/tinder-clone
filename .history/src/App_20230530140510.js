import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import TinderCards from './TinderCards'
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Router>
    
    <Routes>
      
      <Route path="/" element={<h1>Welcome to the Homepage</h1>} />
      <TinderCards/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
