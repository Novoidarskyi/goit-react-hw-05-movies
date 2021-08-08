function fetchAPIQuery(query) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=bbc042013ced99d363e932cd8f83db02&language=en-US&page=1&include_adult=false&query=${query}`,
  ).then(res => res.json());
}
const apiQuery = {
  fetchAPIQuery,
};
export default apiQuery;
