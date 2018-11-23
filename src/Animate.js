import React, { Component } from 'react';

class Animate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      words: []
    }
    // this.createPhrase = this.createPhrase.bind(this);
    // this.getRandom = this.getRandom.bind(this);
  }

  // componentDidMount = () => {

  //   this.getRandom();

  // }

  // createPhrase = () => {

  //   const array = ['anna', 'madam', '10201', 'Was it a cat I saw?', 'Do geese see God?', 'Race fast, safe car', 'Able was I ere I saw Elba', 'Rats live on no evil star', 'A man a plan a Canal Panama' ];

  //     let random = Math.floor(Math.random * array.length);

  //     this.setState({ words: random });

  // }

  // getRandom = () => {

  //   setInterval(this.createPhrase(), 3000)
  // }
  

  render() {
    return (
      
      <div className="animation">
        <span className="phrase">anna</span>
        <span className="phrase">madam</span>
        <span className="phrase">10201</span>
        <span className="phrase">Was it a cat I saw?</span>
        <span className="phrase">Do geese see God?</span>
        <span className="phrase">Race fast, safe car</span>
        <span className="phrase">Able was I ere I saw Elba</span>
        <span className="phrase">Rats live on no evil star</span>
        <span className="phrase">A man a plan a Canal Panama</span>
      </div>
    )
  }
}

export default Animate;