import { NavLink, Outlet } from "react-router-dom";

export default function MovieDetailsPage() {
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
