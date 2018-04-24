import React, {Component} from "react";
import ButtonGreen from "Coms/button-blue";
import "./assets/styles/home";
import UlCha from "./ulcha";

const data = [
    {name: "Nguyễn Văn A", grade: 6},
    {name: "Trần Văn Dũng", grade: 2},
    {name: "Nguyễn Văn A", grade: 3},
    {name: "Nguyễn Văn GF", grade: 6},
    {name: "Nguyễn Văn F", grade: 6}
];

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lophoc: data
        };
    }

    componentWillMount() {
        document.title = "Homepage";
    }
    componentDidMount() {
        console.log(`jQuery version: ${$.fn.jquery}`);
        // $("#mymodal").modal("show");
    }

    liClick(hs) {
        alert(`${hs.name} - Lớp: ${hs.grade}`);
    }
    addHocSinh() {
        this.setState(prevState => ({
            lophoc: [...prevState.lophoc, {name: "Nguyễn Văn Thêm", grade: 7}]
        }));
    }
    onChangeTen(e) {
        // console.log(this/.refs.inputTen);
        // this.refs.txtTen.textContent = this.refs.inputTen.value;
        this.setState({textTen: this.refs.inputTen.value});
    }
    onSubmitForm(e) {
        e.preventDefault();
        const ten = this.refs.inputTen.value;
        const lop = this.refs.inputLop.value;
        if (!ten) {
            alert("Nhập tên đi má!!!!");
            // this.refs.inputTen.focus();
            return;
        }
        this.setState(prevState => {
            const locthu = prevState.lophoc.find(x => x.name == ten && x.grade == lop);
            console.log(locthu);
            if (locthu) {
                return {lophoc: prevState.lophoc};
            }
            // ...
            return {
                lophoc: [...prevState.lophoc, {name: ten, grade: lop}]
            };
        });
    }

    render() {
        const datalophoc = this.state.lophoc.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase());
        return (
            <div className="container">
                <p>Homepage is here :)</p>
                <p onClick={() => this.addHocSinh()}><ButtonGreen >CLICK ME</ButtonGreen></p>
                <h4 id="title-lophoc">Danh sách lớp học</h4>
                <ul>
                    {datalophoc.map((hocsinh, i) => (
                        <li onClick={() => this.liClick(hocsinh)} key={i}>
                            {hocsinh.name}
                            {hocsinh.grade > 5 && `- Lớp: ${hocsinh.grade}`}
                        </li>
                    ))}
                </ul>

                <UlCha />

                <div className="img-wrap">
                    <div className="img-drop ratio-169"></div>
                </div>

                <div className="img-wrap">
                    <div className="img-drop ratio-169">
                        <img src="/upload/imgupload.jpeg" alt="" />
                    </div>
                </div>

                <h1>FORM</h1>
                <form className="form-lop" ref="form-lop" onSubmit={e => this.onSubmitForm(e)} >
                    <div className="form-group">
                        <label htmlFor="inputTen">Họ và tên học sinh:</label>
                        <input type="text" className="form-control" id="inputTen" onChange={e => this.onChangeTen(e)} ref="inputTen" placeholder="Nhập tên..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputLop">Lớp:</label>
                        <input type="number" defaultValue="6" className="form-control" id="inputLop" ref="inputLop" placeholder="Nhập lớp..." />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">SAVE</button>
                        <button type="button" className="btn btn-info" data-toggle="modal" data-target="#mymodal">Show Modal</button>
                    </div>
                    <p ref="txtTen">{this.state.textTen}</p>
                </form>

                <div id="mymodal" className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Modal Header</h4>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Homepage;
