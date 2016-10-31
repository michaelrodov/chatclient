import React from 'react';

export default class Message extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"message " + ((this.props.mine) ? "mine-message" : "guest-message")} >
                <span className="message-text">{this.props.text}</span>
                <span className="message-from">{this.props.from}</span>
            </div>
        );
    }
}