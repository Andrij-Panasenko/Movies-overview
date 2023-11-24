import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from 'api/api';
import { Loader } from 'components/Loader/Loader';
import toast from 'react-hot-toast';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';

export default function MovieDetailsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);

  const location = useLocation();

  const param = useParams();

  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    async function fetchMovie() {
      setIsLoading(true);
      try {
        const fetchedMovie = await getMovieById(param.movieId);
        setMovie(fetchedMovie);
      } catch (error) {
        toast.error('Ooops! Something went wrong. Try reloading page!');
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [param.movieId]);

  return (
    <>
      {isLoading && <Loader />}

      <Link to={backLink}>
        <b>Go Back</b>
      </Link>

      <MovieDetails movie={movie} />
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
