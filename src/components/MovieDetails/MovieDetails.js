import { BASE_POSTER_URL, IMG_PLSCEHOLDER_LARGE } from 'constants/constants';
import { GenreItem, Genres, GenresList, Img, InfoWrapp, MovieTitle, Overview, Wrapper } from './MovieDetails.styled';

export const MovieDetails = ({ movie }) => {
  return (
    <>
      {movie && (
        <Wrapper>
          <Img
            src={
              movie.poster_path
                ? BASE_POSTER_URL + movie.poster_path
                : IMG_PLSCEHOLDER_LARGE
            }
            alt={movie.original_title}
          />
          <InfoWrapp>
            <MovieTitle>{movie.original_title}</MovieTitle>
            <p >User score: {movie.vote_average}</p>
            <div>
              <Overview>Overview</Overview>
              <p>{movie.overview}</p>
            </div>
            <div>
              <Genres>Genres</Genres>
              <GenresList>
                {movie.genres &&
                  movie.genres.map(genre =>
                    <GenreItem key={genre.id}>{genre.name}</GenreItem>)}
              </GenresList>
            </div>
          </InfoWrapp>
        </Wrapper>
      )}
    </>
  );
};
