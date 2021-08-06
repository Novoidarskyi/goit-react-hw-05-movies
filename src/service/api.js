import axios from 'axios';

const API_KEY = 'ddca70006d7ac5087113b58b3865e5d2';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

async function getTrendingFilms() {
  const response = await axios({
    method: 'GET',
    url: `/trending/movie/week?api_key=${API_KEY}`,
  });
  return response;
}

function getFilmById(id) {
  return axios({
    method: 'GET',
    url: `/movie/${id}?api_key=${API_KEY}`,
  });
}

function getFilmsByQuery(query) {
  return axios({
    method: 'GET',
    url: `/search/movie?api_key=${API_KEY}&query=${query}`,
  });
}

function getCashInfo(id) {
  return axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
}

function getReviewsInfo(id) {
  return axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
}

export {
  getTrendingFilms,
  getFilmById,
  getFilmsByQuery,
  getCashInfo,
  getReviewsInfo,
};
