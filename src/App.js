import './styles/App.css';

import {BrowserRouter as Router} from "react-router-dom";
import Navbar from './components/UI/button/navbar/Navbar';
import AppRouter from './API/AppRouter';

function App() {
  return (
        <Router>
          <div className="navbar">
            <Navbar/>
          </div>
          <AppRouter/>
        </Router>
  )
}

export default App;
