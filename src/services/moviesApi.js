const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "d5bb539954c2ef9cc9d2f82f738f59e0";

async function fetchWithErrorHandling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("No found"));
}

export function fetchTreading() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY} `
  );
}

export function fetchSearchMovies(name) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie/?api_key=${API_KEY}&query=${name}&language=en-US&page=1&include_adult=false`
  );
}

export function fetchMoviesDetails(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US `
  );
}

export function fetchMoviesCredits(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMoviesReviews(id) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US `
  );
}
