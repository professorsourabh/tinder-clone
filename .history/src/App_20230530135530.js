import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    
    <Router>
    <Navbar/>
    <Routes>
      {/* <Route path="/"><h1>hello</h1></Route> */}
      <Route path="/" element={<h1>Welcome to the Homepage</h1>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
