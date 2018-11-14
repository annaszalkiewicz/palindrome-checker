import React, { Component } from 'react';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
    this.checkIfPalindrome = this.checkIfPalindrome.bind(this);

  }
  
  checkIfPalindrome = (e) => {
    e.preventDefault();
    console.log('Submitted form');
    
  }

  render() {
    return (
      <section>
        <form onSubmit={e => this.checkIfPalindrome(e)}>
          <label htmlFor="text">Type word, number or phrase</label>
          <input type="text" name="text" id="text"/>
          <button type="submit">Check for Palindrome</button>
        </form>
      </section>
    )
  }
}

export default Form;