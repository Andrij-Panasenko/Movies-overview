import { Route, Routes } from 'react-router-dom';

import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { lazy } from 'react';
import { AppLayout } from './AppLayout/AppLayout';

const HomePage = lazy(() => import('pages/HomePage/HomaPage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MoviesDetailsPage/MovieDetailsPage')
);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
