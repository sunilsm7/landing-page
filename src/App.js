import React, { Component } from 'react';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import UserProfile from './components/UserProfile';
// css
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm:"",
      searchUrl:"",
    };
    this.apiKey = '87dfa1c669eea853da609d4968d294be';
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    
  };

  handleKeyUp(e){
    if(e.key === 'Enter' && this.state.searchTerm !== ''){
      let searchUrl = `search/multi?query=${this.state.searchTerm}&api_key=${this.apiKey}`;
      this.setState({searchUrl:searchUrl});
      console.log(searchUrl);
    }
  }

  handleChange(e){
    this.setState({searchTerm: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <header className="Header">
          <Logo />
          <Navigation />
          <div id="search" className="Search">
            <input
              type="search"
              placeholder="Search for a title....."
              onKeyUp={this.handleKeyUp}
              onChange={this.handleChange}
              value={this.state.searchTerm} />
              
          </div>
          <UserProfile />
        </header>
      </div>
    );
  }
}

export default App;
