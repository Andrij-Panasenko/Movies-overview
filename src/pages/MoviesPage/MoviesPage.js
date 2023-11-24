import { getMovieByName } from 'api/api';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getMovieByQuery() {
      setIsLoading(true);
      try {
        const fetchedMovies = await getMovieByName(query);
        setMovies(fetchedMovies);
      } catch (error) {
        toast.error('Ooops! Something went wrong. Try reloading page!');
      } finally {
        setIsLoading(false);
      }
    }
    getMovieByQuery();
  }, [query]);

  return (
    <>
      <SearchBar />
      {isLoading && <Loader />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}
