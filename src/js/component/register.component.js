import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import UserService from '../service/user.service';
import '../../style/login.css';


const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const validateUsername = value => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters!
            </div>
        );
    }
}

const validatePassword = value => {
    const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    if (value.length < 8 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 20 characters!
            </div>
        );
    } else if (!mediumRegex.test(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                The password is weak!
            </div>
        );
    }
}

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeGroupId = this.onChangeGroupId.bind(this);

        this.state = {
          username: "",
          password: "",
          groupId: "",
          successful: false,
          message: ""
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeGroupId(e) {
        this.setState({
            groupId: e.target.value
        });
    }

    handleRegister(e) {
        e.preventDefault();

        this.setState({
            message: "",
            successful: true
        });

        this.form.validateAll();
        if (this.checkBtn.context._errors.length === 0) {
            UserService.register(this.state.username, this.state.password, this.state.groupId)
                .then(
                () => {
                    this.props.history.push("/login");
                    window.location.reload();
                },
                error => {
                    this.setState({
                        loading: false,
                        message: "Could not sign in"
                    });
                }
            );
        }
    }
    render() {
        return (
            <div className="align-items-sm-center">
                <div className="card card-container align-items-sm-center pb-3 form">
                    <h4 className="p-3 align-self-center" >Sign up</h4>
                    <Form
                        onSubmit={this.handleRegister}
                        ref={c => {this.form = c;}}
                    >
                        <div className="form-group">
                            <label htmlFor="username" className="pl-3 pt-3">Username</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                                validations={[required, validateUsername]}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="pl-3 pt-3">Password</label>
                            <Input
                                type="password"
                                className="form-control"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                validations={[required, validatePassword]}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="groupId" className="pl-3 pt-3">Group Index</label>
                            <Input
                                type="number"
                                className="form-control"
                                name="groupId"
                                min="1"
                                max="4"
                                value={this.state.groupId}
                                onChange={this.onChangeGroupId}
                                validations={[required]}
                            />
                        </div>

                        <div className="form-group">
                            <button
                                className="btn btn-primary btn-block"
                                disabled={this.state.loading}
                            >
                                {this.state.loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Register</span>
                            </button>
                        </div>

                        {this.state.message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {this.state.message}
                                </div>
                            </div>
                        )}
                        <CheckButton
                            style={{ display: "none" }}
                            ref={c => {
                                this.checkBtn = c;
                            }}
                        />
                    </Form>
                </div>
            </div>
        )
    }
}
