import axios from 'axios';

axios.defaults.baseURL = '';

const API_KEY = 'd7f6b400e4ff4ac775f6f03de04c7bd3';
const BASE_URL = 'https://api.themoviedb.org/';

export const getTrending = async () => {
  const response = await axios.get();

  return response.data;
};

export const getMovies = async params => {};

export const getMovieByName = async query => { };

export const getMovieById = async (id) => {
  // const response = await axios.get(`/movies/${id}`)
}

