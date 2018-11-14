import React, { Component } from 'react';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }

    this.checkIfPalindrome = this.checkIfPalindrome.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange = (e) => {
    console.log('Value changed');
    this.setState({ value: e.target.value })
    
  }
  
  checkIfPalindrome = (e) => {
    e.preventDefault();
    console.log('Submitted form');
    
  }

  render() {

    const { value } = this.state;

    return (
      <section>
        <form onSubmit={this.checkIfPalindrome}>
          <label htmlFor="text">Type word, number or phrase</label>
          <input type="text" name="text" id="text" value={value} onChange={this.handleChange} />
          <button type="submit">Check for Palindrome</button>
        </form>
      </section>
    )
  }
}

export default Form;