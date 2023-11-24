import { getReviews } from 'api/api';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { Author, Content, ListItem, ReviewsList } from './Reviews.styled';
import { Loader } from 'components/Loader/Loader';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const param = useParams();

  useEffect(() => {
    setIsLoading(true);
    try {
      async function getReviewsDetails() {
        const reviews = await getReviews(param.movieId);
        setReviews(reviews);
      }
      getReviewsDetails();
    } catch (error) {
      toast.error('Sorry, there is no results');
    } finally {
      setIsLoading(false);
    }
  }, [param.movieId]);

  return (
    <>
      {isLoading && <Loader/>}
      {reviews && reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map(({ author, id, content }) => (
            <ListItem key={id}>
              <Author>Author: {author}</Author>
              <Content>{content}</Content>
            </ListItem>
          ))}
        </ReviewsList>
      ) : (
        <p>There is no reviews yet</p>
      )}
    </>
  );
};
