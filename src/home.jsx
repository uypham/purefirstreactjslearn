import React, { Component } from 'react';
import ButtonGreen from "coms/button-blue";

class Homepage extends Component {
    componentWillMount(){
        document.title = "Homepage";
    }
    render() {
        return (
            <div>
                <p>Homepage is here :)</p>
                <p><ButtonGreen>CLICK ME</ButtonGreen></p>
            </div>
        );
    }
}

export default Homepage;