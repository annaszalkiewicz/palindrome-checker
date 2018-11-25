import React, { Component } from 'react';

class Animate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      palindromes: ['anna', 'madam', '10201', 'Was it a cat I saw?', 'Do geese see God?', 'Race fast, safe car', 'Able was I ere I saw Elba', 'Rats live on no evil star', 'A man a plan a Canal Panama' ],
      palindrome: ''
    }
    this.repeat = this.repeat.bind(this);
    this.create = this.create.bind(this);
  }

  componentDidMount = () => {

    this.repeat();

  }

  repeat = () => {
    window.setInterval(this.create, 5000);
  }

  create = () => {

    let randomPalindrome = this.state.palindromes[Math.floor(Math.random() * this.state.palindromes.length)]

    this.setState({ palindrome: randomPalindrome });

  }

  render() {

    const { palindrome } = this.state;

    const style = {
      fontSize: Math.floor((Math.random() * 70) + 20) + 'px',
      left: Math.floor((Math.random() * 70) + 0) + '%',
      top: Math.floor((Math.random() * 90) + 0) + '%',
    }

    return (
      
      <div className="animation">
        <span className="animation-palindrome" style={style}>{palindrome}</span>
      </div>
    )
  }
}

export default Animate;