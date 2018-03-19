import React, { Component } from 'react';
// import "./style.css";

class ButtonGreen extends Component {
    onYouClick(){
        alert("Yeah!");
        // console.log(this);
    }
    render() {
        return (
            <button onClick={()=>this.onYouClick()} style={{color: "#fff", background: "blue"}}>{this.props.children}</button>
        );
    }
}


export default ButtonGreen;