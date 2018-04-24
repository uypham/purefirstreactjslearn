import React, { Component } from "react";

import LiCon from "./licon";

class UlCha extends Component {
    constructor(props) {
        super(props);
        this.state = { color: 'black' };
    }

    onChaCallback = (color) => {
        console.log(color);
        this.setState({ color });
    }
    render() {
        console.log("==== ULCHA Render ====");
        return (
            <ul className="chacon" style={{ color: this.state.color }} >
                <LiCon onClick={this.onChaCallback} color="red" />
                <LiCon onClick={this.onChaCallback} color="yellow" />
                <LiCon onClick={this.onChaCallback} color="green" />
                <LiCon onClick={this.onChaCallback} color="blue" />
            </ul>
        );
    }
}

export default UlCha;
