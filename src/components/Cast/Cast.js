import { getCast } from 'api/api';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { BASE_POSTER_URL, IMG_PLACEHOLDER } from 'constants/constants';
import { CastList, Char, Img, Li, Name } from './Cast.styled';

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
         <CastList>
           {cast.map(({ id, character, name, profile_path }) => (
             <Li key={id}>
               <Img
                 src={
                   profile_path
                     ? BASE_POSTER_URL + profile_path
                     : IMG_PLACEHOLDER
                 }
                 alt={name}
               />
               <Name>Name: {name}</Name>
               <Char>Character: {character}</Char>
             </Li>
           ))}
         </CastList>
       )}
     </>
   );
};
