import { Component } from "react";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0

  };

  countTotalGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
  }))
  };

  countTotalNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
  }))
  };

  countTotalBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
  }))
  };

// countTotalFeedback = () => {
//   return this.countTotalGood + this.countTotalNeutral + this.countTotalBad;
  
     
//   };



  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    return (
      <div className="feedback">
        <h1>Please leave feedback</h1>
        <ul>
          <li><button type="button" onClick ={this.countTotalGood}>Good</button></li>
          <li><button type="button" onClick ={this.countTotalNeutral}>Neutral</button></li>
          <li><button type="button" onClick ={this.countTotalBad}>Bad</button></li>
        </ul>
 
        <h2> Statistics</h2>
        <ul>
          <li>
            <p>Good: {good}</p>
          </li>
          <li>
            <p>Neutral: {neutral}</p>
          </li>
          <li>
            <p>Bad: {bad}</p>
          </li>
          <li>
            <p>Total: {this.countTotalFeedback}</p>
          </li>
        </ul>

      </div>
 
     )
   }
};
