import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { Button } from './components/Button';
import HomePage from './components/HomePage/HomePage';
import Slider from './components/Slider/SLider';



function App() {
  return (
    <div className="App">
      <Navbar />    
      <Button />
      <HomePage />
      <Slider />
    </div>
  );
}

export default App;
