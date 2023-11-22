import { BASE_POSTER_URL } from 'constants/constants';
import { NavLink, Outlet } from 'react-router-dom';

export const MovieDetails = ({ movie }) => {
  return (
    <>
      {movie && (
        <div>
          <img
            src={`${BASE_POSTER_URL + movie.poster_path}`}
            alt={movie.original_title}
          />
          <div>
            <h1>{movie.original_title}</h1>
            <p>User score: {movie.vote_average}</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <ul>
              {movie.genres &&
                movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
            </ul>
          </div>
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
        </div>
      )}
    </>
  );
};
