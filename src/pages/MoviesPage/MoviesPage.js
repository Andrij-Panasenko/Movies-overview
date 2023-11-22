import { getMovieByName } from "api/api";
import { FilmList } from "components/FilmList/FilmList";
import { Loader } from "components/Loader/Loader";
import { SearchForm } from "components/SearchForm/SearchForm";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  
  
  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getMovieByQuery() {

      setIsLoading(true)
      try {
        const fetchedMovies = await getMovieByName(query);
        setMovies(fetchedMovies)
        
      } catch (error) {
        toast.error('Ooops! Something went wrong. Try reloading page!');
      } finally {
      setIsLoading(false);

      }
    }
    getMovieByQuery();
  }, [query]);

  const searchHandler = evt => {
    evt.preventDefault();

    const searchQuery = evt.currentTarget.query.value;
    setQuery(searchQuery.toLowerCase().trim());
  };
  

  return (
    <>
      <SearchForm onLoad={searchHandler} />
      {isLoading && <Loader />}
      {movies.length > 0 && <FilmList movies={movies} />}
    </>
  );
}
