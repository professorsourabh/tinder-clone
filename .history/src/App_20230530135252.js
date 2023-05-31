import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/"><h1>hello</h1></Route>
      <Route path="/chat"><h1>Bye</h1></Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
