import { getTrending } from 'api/api';
import { FilmList } from 'components/FilmList/FilmList';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';

import toast from 'react-hot-toast';

export default function Home() {
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
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      <FilmList movies={trendings} />
    </>
  );
}
