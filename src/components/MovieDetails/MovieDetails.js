import { NavLink, Outlet } from 'react-router-dom';

export default function MovieDetails() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
//десь тут треба/можна використати params = useParams()