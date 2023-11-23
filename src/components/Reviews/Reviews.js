import { getReviews } from 'api/api';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const param = useParams();

  useEffect(() => {
    try {
      async function getReviewsDetails() {
        const reviews = await getReviews(param.movieId);
        setReviews(reviews);
      }
      getReviewsDetails();
    } catch (error) {
      toast.error('Sorry, there is no results');
    }
  }, [param.movieId]);

  return (
    <>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, id, content }) => (
            <li key={id}>
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>There is no reviews yet</p>
      )}
    </>
  );
};
