import React, { Component } from "react";
import Form from "./Form";

class Main extends Component {

  render() {
    return (
      <main>
        <section className="description">
          <h2>What's palindrome?</h2>
          <p>A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, such as madam or racecar or the number 10201. Sentence-length palindromes may be written when allowances are made for adjustments to capital letters, punctuation, and word dividers, such as "A man, a plan, a canal, Panama!", "Was it a car or a cat I saw?" or "No 'x' in Nixon". </p>
        </section>
        <Form />
      </main>
    );
  }
}

export default Main;