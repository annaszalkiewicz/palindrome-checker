import React, { Component } from 'react';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Palindrome Checker</h1>
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
