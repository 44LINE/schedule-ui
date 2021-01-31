import axios from 'axios';
import authHeader from './auth/auth-header';
const API_URL = 'https://pk-schedule-api.herokuapp.com/';

class UserService {
    register(username, password, groupId) {
        return axios
            .post(API_URL + "signup", {
                username,
                password,
                groupId
            })
    }

    isLogged() {
        return localStorage.getItem("token");
    }

    loadUserGroupId() {
        return axios
            .get(API_URL + 'user', { headers: authHeader() })
            .then(response => {
                if (response.data) {
                    localStorage.setItem("groupId", JSON.stringify(response.data.groupId));
                    window.location.reload();
                }

                return localStorage.getItem("groupId");
            });
    }

    getUserGroupId() {
        let groupId = localStorage.getItem("groupId");
        if (!groupId) {
            groupId = this.loadUserGroupId();
        }
        return groupId;
    }
}
export default new UserService();
