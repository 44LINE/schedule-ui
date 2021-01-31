import authHeader from "../auth/auth-header";

export const fetchClassDetails = async (url) => {
    return await fetch(url, {
        method: "GET",
        headers: authHeader()
    }).then((response) => {
        if (response.ok) {
            return response.json().then(data => data._embedded.classDetailsList);
        } else {
            return null;
        }
    })
};
