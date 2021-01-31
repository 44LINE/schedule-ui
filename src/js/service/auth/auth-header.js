export default function authHeader() {
    const token = localStorage.getItem('token');

    if (token) {
        console.log("Got token" + token);
        return { Authorization: 'Bearer ' + token };
    } else {
        console.log("Problem");
        return {};
    }
}
