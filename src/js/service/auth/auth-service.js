import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "https://pk-schedule-api.herokuapp.com/";

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + "login", {
                username,
                password
            })
            .then(response => {
                if (response.data) {
                    localStorage.setItem("token", JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    logout() {
        axios
            .delete(API_URL + "signout", {headers: authHeader()})
            .then(
                () => {
                    localStorage.removeItem("token")
                    localStorage.removeItem("groupId")
                    this.props.history.push("/home");
                },
                error => {
                    localStorage.removeItem("token")
                    localStorage.removeItem("groupId")
                    this.props.history.push("/home");
                }
        );

    }

    register(username, email, password, groupId) {
        return axios.post(API_URL + "signup", {
            username,
            password,
            groupId
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('token'));;
    }
}

export default new AuthService();
