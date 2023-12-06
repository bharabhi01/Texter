import React, { Component } from "react";
import ChatHeader from "./components/ChatHeader";
import "./App.css";
import { connect, sendMessage } from "./api";
import { Button } from "antd";

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
        <ChatHeader />
        <Button onClick={this.send}>Send Message</Button>
      </div>
    )
  }
}

export default App;
