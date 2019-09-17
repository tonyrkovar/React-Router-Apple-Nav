import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainNav from './components/MainNav';

function App() {
  return (
    <div className="App">
      <p> DISPLAY</p>
      <MainNav />
     {console.log(MainNav)}
    </div>
  );
}

export default App;
