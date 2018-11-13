import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <section>
        <form>
          <label htmlFor="text">Type word, number or phrase</label>
          <input type="text" name="text" id="text"/>
          <button type="submit">Check for Palindrome</button>
        </form>
      </section>
    )
  }
}

export default Form;