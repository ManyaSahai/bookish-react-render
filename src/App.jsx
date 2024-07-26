import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home';

import Premiums from './premiums/Premiums';
import Signup from './components/Signup';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
    <div className="dark:bg-slate-900 dark:text-white"> 
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/premium" element={<Premiums/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
     </div>
      </Router>
   
  );
}

export default App;


