import authHeader from "../auth/auth-header";

export const fetchEntity = async (url) => {
    return await fetch(url, {
        method: "GET",
        headers: authHeader()
    }).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            return null;
        }
    })
};