import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './style/App.css';

import AuthService from "./js/service/auth/auth-service";

import Login from "./js/component/login.component";
import Home from "./js/component/home.component";
import Schedule from "./js/component/class/Schedule";
import Register from "./js/component/register.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      authToken: undefined
    };
  }

  componentDidMount() {
    const token = AuthService.getCurrentUser();
    if (token) {
      this.setState({
          authToken: token
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { authToken } = this.state;

    return (
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>

              {authToken && (
                  <li className="nav-item">
                    <Link to={"/schedule"} className="nav-link">
                      Schedule
                    </Link>
                  </li>
              )}
            </div>

            {authToken ? (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a href="/login" className="nav-link" onClick={this.logOut}>
                      Logout
                    </a>
                  </li>
                </div>
            ) : (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                      Login
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to={"/register"} className="nav-link">
                      Sign Up
                    </Link>
                  </li>
                </div>
            )}
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/schedule" component={Schedule} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </div>
        </div>
    );
  }
}

export default App;
