// eslint-disable-next-line spaced-comment
//TODO: update with new API
// https://rapidapi.com/blog/movie-api/
const API_BASE_URL = "https://api.tvmaze.com";

export async function apiGet(queryStr) {
    const response = await fetch(`${API_BASE_URL}${queryStr}`).then((resp) =>
        resp.json()
    );
    // console.log("API RESPONSE > ", response);
    return response;
}
