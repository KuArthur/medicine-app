import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import config from './config.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello World!
          </p>
        </header>
      </div>
    );
  }
}

export default App