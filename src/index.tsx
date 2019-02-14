import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

/ 1. A component! */
class GreetingCard extends React.Component {
  state = {
    text: "Hello, World!"
  };

  handleClick = () => {
    this.setState({ text: "Hello, ITIS" });
  };

  render() {
    const { text: mytext } = this.state;
    return (
      <div>
        <h1>{mytext}</h1>
        <button onClick={this.handleClick}>Hey!</button>
      </div>
    );
  }
}

/ 2. Define a container for the app */
const container = document.getElementById("root");

/** 3. Render the App */
ReactDOM.render(<GreetingCard />, container);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
