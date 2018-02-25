import React, { Component } from 'react';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
// css
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header">
          <Logo />
          <Navigation />

        </header>
      </div>
    );
  }
}

export default App;
