import React, { Component } from 'react';
import { render } from "react-dom";

// CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import Homepage from "./homepage";



class Welcome extends Component {
    render() {
        return <h1>Chào, {this.props.tenbiendai}</h1>;
    }
}

// export default Welcome;

render(<Welcome tenbiendai="Bun" />, document.getElementById("root"));
