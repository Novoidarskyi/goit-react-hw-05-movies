//запрос за фильмом по ID
function fetchAPIid(movie_id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=bbc042013ced99d363e932cd8f83db02&language=en-US`,
  ).then(res => res.json());
}
const apiId = {
  fetchAPIid,
};
export default apiId;
