import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './components/Search';
import History from './components/History';
import './styles/main.css'



function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/history' element={<History />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
