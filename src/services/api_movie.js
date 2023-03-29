import axios from 'axios';

const API_KEY = 'a85bcd146b051e6a179fdcb9f5b0d494';
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: { api_key: API_KEY, language: 'en-US', include_adult: false },
});

export const fetchMovieTrendingDay = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};

export const fetchMovieSearch = async query => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query,
    },
  });
  return data;
};

export const fetchMovieDetail = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const fetchMovieActors = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data.cast;
};

export const fetchMovieReview = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data.results;
};
