import React, { Component } from 'react';
// import "./style.css";

class ButtonGreen extends Component {
    render() {
        return (
            <button style={{ color: "#fff", background: "blue" }}>{this.props.children}</button>
        );
    }
}


export default ButtonGreen;