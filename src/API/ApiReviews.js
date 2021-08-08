function fetchAPIReviews(movie_id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=bbc042013ced99d363e932cd8f83db02&language=en-US&page=1`,
  ).then(res => res.json());
}
const apiReviews = {
  fetchAPIReviews,
};
export default apiReviews;
