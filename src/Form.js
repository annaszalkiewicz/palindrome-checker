import React, { Component } from 'react';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      string: '',
      array: [],
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

    const { value } = this.state;
    let string = value.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    this.setState({ string: string });

    let arr1 = string.split('');

    this.setState({ array: arr1 });

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