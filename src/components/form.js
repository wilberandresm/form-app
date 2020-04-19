import React from "react";
// import { Form, FormGroup, Label, Input } from "reactstrap";
// import { FacebookLoginButton } from "react-social-login-buttons";
import "../components/styles/style.css";

class login extends React.Component {

    handleClick = e => {
        console.log('Form saved');
    };
    keyUpHandler(refName, e) {
        console.log("Escribiendo...");
    }


    render() {
        return (
            <div className="page-wrapper bg-blue p-t-180 p-b-100  pl-2 pr-2 font-robo">
                <div className="wrapper wrapper--w960">
                    <div className="card card-2">
                        <div className="card-heading"></div>
                        <div className="card-body">
                            <h2 className="title">Registration Info</h2>

                            <form>

                                <div className="form-group ">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Names"
                                        onKeyUp={this.keyUpHandler}
                                    ></input>
                                </div>
                                <div className="form-group ">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Last names"
                                        onKeyUp={this.keyUpHandler}
                                    ></input>
                                </div>

                            </form>
                            <button className="btn btn-primary" onClick={this.handleClick}> Save</button>
                        </div>
                    </div>
                </div>
            </div>

        )


    }
}
export default login;
