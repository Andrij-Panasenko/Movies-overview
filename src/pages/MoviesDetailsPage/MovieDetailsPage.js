import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { getMovieById } from 'api/api';
import { Loader } from 'components/Loader/Loader';
import toast from 'react-hot-toast';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { FaArrowLeft } from 'react-icons/fa6';
import {
  AddInfoTitle,
  AddInfoWrapp,
  List,
  ListItem,
  StyledLink,
  StyledNavLink,
  Wrapp,
} from './MovieDetailsPage.styled';

export default function MovieDetailsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backLinckRef = useRef(location);
  const param = useParams();

  const backLink = backLinckRef.current.state?.from ?? '/';

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

      <Wrapp>
        <StyledLink to={backLink}>
          <FaArrowLeft />
          Go Back
        </StyledLink>
      </Wrapp>

      <MovieDetails movie={movie} />
      <AddInfoWrapp>
        <AddInfoTitle>Additional information</AddInfoTitle>
        <List>
          <ListItem>
            <StyledNavLink to="cast">Cast</StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to="reviews">Reviews</StyledNavLink>
          </ListItem>
        </List>
      </AddInfoWrapp>
      <Outlet />
    </>
  );
}
