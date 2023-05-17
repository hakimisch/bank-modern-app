import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter/>
    </div>
  );
}

export default App;
