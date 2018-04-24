import React, {Component} from "react";

class LiCon extends Component {
    onClick() {
        console.log("Thằng con click...");
        // console.log(this.props);
        if (this.props.onClick) this.props.onClick(this.props.color);
    }
    render() {
        return <li onClick={() => this.onClick()} >{this.props.color}{this.props.children}</li>;
    }
}

export default LiCon;
