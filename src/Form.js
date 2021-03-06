import React, { Component } from 'react';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      string: '',
      reversed: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { value } = this.state;
    let string = value.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    this.setState({ string: string });

    let reversed = string.split('').reverse().join('');

    this.setState({ reversed: reversed });
  }

  render() {

    const { value, string, reversed } = this.state;

    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="text">Type word, number or phrase and click button. No-letters characters (except numbers) and any space will be ignored when checking for palindrome.</label>
          <input type="text" name="text" id="text" value={value} onChange={this.handleChange} placeholder="Type here..." />
          <button type="submit">Check for Palindrome</button>
        </form>
        {string === reversed && (
          <p className="palindrome" aria-label="It's palindrome" tabIndex="0">It's palindrome!</p>
        )}

        {string !== reversed && (
          <p className="palindrome" aria-label="It's not palindrome" tabIndex="0">It's not palindrome :(</p>
        )}

      </section>
    )
  }
}

export default Form;