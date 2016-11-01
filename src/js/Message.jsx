import React from 'react';

export default class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"message " + ((this.props.mine) ? "mine-message" : "guest-message")} >
                <span className="message-text">{this.props.text}</span>
                <span className="message-from">
                    <span>{this.props.from}</span>
                    <span>{new Date(this.props.sendtime).toLocaleTimeString()}</span>
                </span>
            </div>
        );
    }
}