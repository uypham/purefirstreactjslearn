import React, {Component} from "react";
import {render} from "react-dom";

// CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Homepage from "./homepage";


class Welcome extends Component {
    render() {
        const abc = `${"anh" + "em"}${document.title}`;
        return <h1>Chào, {this.props.tenbiendai}</h1>;
    }
}

export default Welcome;

render(<Homepage />, document.getElementById("root"));
