import './App.css';
import React from "react";
import MainScreen from './components/Mainscreen';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <MainScreen/>
    </div>

  );
}

export default App;
