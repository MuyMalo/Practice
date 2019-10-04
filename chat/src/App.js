import React from 'react';
import './App.css';

import Chatbox from './components/Chatbox/Chatbox.js';
import Input from './components/Input/Input.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link">
          Learn React
        </a>
      </header>
      
      <Chatbox />
      <Input />
    </div>
  );
}

export default App;
