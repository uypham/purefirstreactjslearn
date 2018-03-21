import React, { Component } from 'react';
import ButtonGreen from "coms/button-blue";

const data = [
    { name: "Nguyễn Văn A", grade: 6 },
    { name: "Trần Văn Dũng", grade: 2 },
    { name: "Nguyễn Văn A", grade: 3 },
    { name: "Nguyễn Văn GF", grade: 6 },
    { name: "Nguyễn Văn F", grade: 6 },
]

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lophoc: data
        }
    }


    componentWillMount() {
        document.title = "Homepage";
    }
    liClick(hs) {
        alert(hs.name + " - Lớp: " + hs.grade);
    }
    addHocSinh() {
        this.setState(prevState => ({
            lophoc: [...prevState.lophoc, { name: "Nguyễn Văn Thêm", grade: 7 }]
        }));
    }
    onChangeTen(e) {
        // console.log(this/.refs.inputTen);
        // this.refs.txtTen.textContent = this.refs.inputTen.value;
        this.setState({ textTen: this.refs.inputTen.value });
    }
    render() {
        return (
            <div>
                <p>Homepage is here :)</p>
                <p onClick={() => this.addHocSinh()}><ButtonGreen  >CLICK ME</ButtonGreen></p>
                <h4>Danh sách lớp học</h4>
                <ul>
                    {this.state.lophoc.map((hocsinh, i) => {
                        return (
                            <li onClick={() => this.liClick(hocsinh)} key={i}>
                                {hocsinh.name}
                                {hocsinh.grade > 5 && `- Lớp: ${hocsinh.grade}`}
                            </li>
                        );
                    })}
                </ul>

                <h1>FORM</h1>
                <input onChange={e => this.onChangeTen(e)} ref="inputTen" placeholder="Nhập tên..." />
                <p ref="txtTen">{this.state.textTen}</p>
            </div>
        );
    }
}

export default Homepage;