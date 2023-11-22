import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd7f6b400e4ff4ac775f6f03de04c7bd3';

//запит за трендовими фільмами з тижня
export const getTrending = async () => {
  const ENDPOINT = 'trending/movie/week';

  const response = await axios.get(`${ENDPOINT}?api_key=${API_KEY}`);

  return response.data.results;
};




// пошук фільмів за ключовим словом
export const getMovieByName = async query => {
  const ENDPOINT = 'search/movie';

  const response = await axios.get(
    `${ENDPOINT}?api_key=${API_KEY}&query=${query}&language=en-US&page=1`
  );

  return response.data.results;
};




//запит повної інформації про фільм для сторінки кінофільму.
export const getMovieById = async movieId => {
  const ENDPOINT = `movie/${movieId}`;

  const response = await axios.get(
    `${ENDPOINT}?api_key=${API_KEY}&language=en-US`
  );
  console.log(response);
};




//запит по акторському складу фільму по його id
export const getCast = async movieId => {
  const ENDPOINT = `movie/${movieId}/credits`;

  const response = await axios.get(
    `${ENDPOINT}?api_key=${API_KEY}&language=en-US`
  );

  return response.data.cast;
};




//запит за reviews фільму за його id
export const getReviews = async movieId => {
  const ENDPOINT = `movie/${movieId}/reviews`;

  const response = await axios.get(
    `${ENDPOINT}?api_key=${API_KEY}&language=en-US`
  );

  return response.data.results;
};


