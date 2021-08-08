//запрос за трендовыми фильмами
function fetchAPI() {
  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=bbc042013ced99d363e932cd8f83db02`,
  ).then(res => res.json());
}
const api = { fetchAPI };

export default api;
