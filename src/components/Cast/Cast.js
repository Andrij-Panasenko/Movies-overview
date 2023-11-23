import { getCast } from 'api/api';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { BASE_POSTER_URL } from 'constants/constants';

export const Cast = () => {
   const [cast, setCast] = useState([])

   const param = useParams();

  useEffect(() => {
    async function getCastDetails() {
      try {
         const castData = await getCast(param.movieId);
         setCast(castData);
      } catch (error) {
         toast.error('Ooops! Something went wrong. Try reloading page!');
      }
    }
     getCastDetails();
     
  }, [param.movieId]);

   return (
     <>
       {cast && (
         <ul>
           {cast.map(
             ({
               id,
               character,
               name,
               profile_path,
              }) => (
                 <li key={id}>
                    <img src={`${profile_path && BASE_POSTER_URL + profile_path}`} alt={name} />
                    <p>Name: {name}</p>
                    <p>Character: {character}</p>
                 </li>
             )
           )}
         </ul>
       )}
     </>
   );
};
