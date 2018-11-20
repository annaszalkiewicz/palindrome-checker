import React, { Component } from 'react';
import Main from './Main';
import Animate from './Animate';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Animate />
        <header className="App-header">
          <h1>Is it palindrome?</h1>
          <h2>Palindrome Checker</h2>
        </header>
        <Main />
        <footer className="footer">
          <p>Written and coded by <a href="https://mywebgraphicdesign.com" target="_blank" rel="noopener noreferrer">Anna Szalkiewicz</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
