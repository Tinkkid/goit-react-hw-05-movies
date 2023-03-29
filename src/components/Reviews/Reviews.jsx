import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReview } from 'services/api_movie';
import { List, ItemReview, AuthorName } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    fetchMovieReview(movieId)
      .then(data => {
        setReviews(data);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <List>
      {reviews.length !== 0 ? (
        reviews.map(({ author, content, id }) => (
          <ItemReview key={id}>
            <AuthorName>{author}</AuthorName>
            <p>{content}</p>
          </ItemReview>
        ))
      ) : (
        <ItemReview>We did not find any reviews</ItemReview>
      )}
    </List>
  );
};

export default Reviews;
