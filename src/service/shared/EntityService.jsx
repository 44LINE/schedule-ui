export const fetchEntity = async (url) => {
    return await fetch(url).then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            return null;
        }
    })
};