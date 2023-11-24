import { BASE_POSTER_URL } from 'constants/constants';
import { useLocation } from 'react-router-dom';
import { Img, Link, List, ListItem, MovieTitle } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, original_title, poster_path }) => {
        return (
          <ListItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <Img
                src={poster_path && BASE_POSTER_URL + poster_path}
                alt={original_title}
              />
              <MovieTitle>{original_title}</MovieTitle>
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};
