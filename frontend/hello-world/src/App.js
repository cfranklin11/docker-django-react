import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <label for='char-input'>How many characters does</label>
      <input id='char-input' type='text' />
      <button>have?</button>
    </div>
  );
}

export default App;
