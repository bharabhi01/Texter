import React, { Component } from "react";
import "./App.css";
import { connect, sendMessage } from "./api";
import { Button } from "antd";
import ChatHeader from "./components/ChatHeader";
import ChatHistory from "./components/ChatHistory";
class App extends Component {
  constructor(props) {
    super(props);
    connect();
    this.state = {
      chatHistory: [],
    };
  }

  componentDidMount() {
    connect((message) => {
      console.log("New Messages!");
      this.setState((prevState) => ({
        chatHistory: [...this.state.chatHistory, message],
      }));
      console.log(this.state);
    });
  }

  send() {
    console.log("Hi!");
    sendMessage("Hi!");
  }

  render() {
    return (
      <div className="App">
        <ChatHeader />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <Button onClick={this.send}>Send Message</Button>
      </div>
    );
  }
}

export default App;
