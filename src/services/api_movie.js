import axios from 'axios';

const API_KEY = 'a85bcd146b051e6a179fdcb9f5b0d494';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function fetchMovieTrendingDay() {
  const { data } = await axios.get(`/trending/movie/day`, {
    params: { api_key: API_KEY },
  });
  return data.results;
}

export async function fetchMovieSearch(query) {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });
  return data.results;
}

export async function fetchMovieDetail(id) {
  const { data } = await axios.get(`/movies/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
}

export async function fetchMovieActors(id) {
  const { data } = await axios.get(`/movies/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data.cast;
}

export async function fetchMovieReview(id) {
  const { data } = await axios.get(`/movies/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data.results;
}
