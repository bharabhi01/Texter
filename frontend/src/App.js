import React, { Component } from "react";
import "./App.css";
import { connect, sendMessage } from "./api";

class App extends Component {
  constructor(props) {
    super(props)
    connect();
  }

  send() {
    console.log("Hi!")
    sendMessage("Hi!")
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.send}>Send Message</button>
      </div>
    )
  }
}

export default App;
