import React, { Component } from "react";
import "./ChatInput.scss"

class ChatInput extends Component {
    render() {
        return (
            <div className="ChatInput">
                <input onKeyDown={this.props.send} autoFocus placeholder="Type message here.." />
            </div>
        );
    }
}

export default ChatInput