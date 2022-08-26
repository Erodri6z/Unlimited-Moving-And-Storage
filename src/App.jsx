
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';


import Nav from './components/nav/nav'


function App () {
  return (
    <main>
      <Nav className="Nav-bar" />
      <Routes>
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
    </main>
    
  )
}

export default App;
