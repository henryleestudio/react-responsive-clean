import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Create } from './components/pages/Home';
import Services from './components/pages/Services';
import Events from './components/pages/Events';
import SignUp from './components/pages/SignUp';
// command D to highlight a complete word the curser is on

function App() {
  return (
    <>
    <Navbar />    
    <Routes>
      <Route path ='/' element={<Create />} />
      <Route path ='/services' element={<Services />} />
      <Route path ='/events' element={<Events />} />
      <Route path ='/sign-up' element={<SignUp />} />
    </Routes>
    </>
  );
}

export default App;