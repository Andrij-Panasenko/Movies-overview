import { Link } from 'react-router-dom';

export const FilmList = ({ movies }) => {

  return (
    <ul>
      {movies.map(({ id, original_title }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>{original_title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
