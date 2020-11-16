export const fetchClassDetails = async (url) => {
    return await fetch(url).then((response) => {
        if (response.ok) {
            return response.json().then(data => data._embedded.classDetailsList);
        } else {
            return null;
        }
    })
};
