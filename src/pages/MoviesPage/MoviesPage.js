import { getMovieByName } from "api/api";
import { FilmList } from "components/FilmList/FilmList";
import { Loader } from "components/Loader/Loader";
import { SearchForm } from "components/SearchForm/SearchForm";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  // const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  const query = searchParams.get('query') ?? '';

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

    searchParams.set('query', searchQuery)
    setSearchParams(searchParams)






    // searchParams.set('query', searchQuery.toLowerCase().trim());
    // setSearchParams(searchParams);
    // setQuery(searchQuery.toLowerCase().trim());
  };
  

  return (
    <>
      <SearchForm onLoad={searchHandler} />
      {isLoading && <Loader />}
      {movies.length > 0 && <FilmList movies={movies} />}
    </>
  );
}
