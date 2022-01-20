//
const API_BASE_URL = "https://api.tvmaze.com";

export async function apiGet(queryStr) {
    const response = await fetch(`${API_BASE_URL}${queryStr}`).then((resp) =>
        resp.json()
    );
    // console.log("API RESPONSE > ", response);
    return response;
}
