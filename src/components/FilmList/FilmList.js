import { Link, useLocation } from 'react-router-dom';

export const FilmList = ({ movies }) => {
   console.log(movies);
   const location = useLocation()

   console.log(location)
  return (
    <ul>
      {movies.map(({ id, original_title }) => {
        return (
          <li key={id}>
            <Link>{original_title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
