import React, { Component } from "react";
import UserService from '../service/user.service';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: null
        };
    }

    componentDidMount() {
        if (UserService.isLogged()) {
            this.setState({
                content: "You are logged in"
            });
        } else {
            this.setState({
                content: "Log in to view schedule"
            });
        }
    }

    render() {
        return (
            <div className="container">
                <header className="bg-light p-4">
                    <h3>{this.state.content}</h3>
                </header>
            </div>
        );
    }
}
