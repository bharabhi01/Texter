import React, { Component } from "react";

class ChatHistory extends Component {
  render() {
    const messages = this.props.chatHistory.map((message, index) => (
      <p key={index}>{message.data}</p>
    ));

    return (
      <div>
        <h2>Chat History</h2>
        {messages}
      </div>
    );
  }
}

export default ChatHistory;
