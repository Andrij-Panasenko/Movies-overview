import { getTrending } from 'api/api';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';

import toast from 'react-hot-toast';
import { Title } from './HomePage.styled';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);
      try {
        const data = await getTrending();
        setTrendings(data);
      } catch (error) {
        toast.error('Ooops! Something went wrong. Try reloading page!');
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      {isLoading && <Loader />}
      <MovieList movies={trendings} />
    </>
  );
}
