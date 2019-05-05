import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function handleSubmit(event) {
  const text = document.querySelector('#char-input').value

  axios
    .get(`/char_count?text=${text}`).then(data => {
      document.querySelector('#char-count').value = `${data.count} characters!`
    })
    .catch(err => console.log(err))
}



function App() {
  return (
    <div className="App">
      <div>
        <label for='char-input'>How many characters does</label>
        <input id='char-input' type='text' />
        <button>have?</button>
      </div>

      <div>
        <h3 id='char-count' onclick={handleSubmit}></h3>
      </div>
    </div>
  );
}

export default App;
