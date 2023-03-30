import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { fetchMovieDetail } from 'services/api_movie';
import GoBackLink from 'components/GoBackLink/GoBackLink';
import {
  Container,
  WrapMainInfo,
  WrapInfo,
  Title,
  Image,
  Text,
  WrapAddInfo,
  ListAddInfo,
  ItemAddInfo,
  StyledNavLink,
} from './MovieDetails.styled';

const defaultImage =
  'https://cdn.pixabay.com/photo/2016/11/09/23/16/music-1813100_960_720.png';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetail(movieId)
      .then(data => {
        console.log(data);
        setMovie(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [movieId]);

  if (!movie) return;

  const backLinkHref = location.state?.from ?? '/';

  const {
    original_title,
    poster_path,
    overview,
    genres,
    vote_average,
    release_date,
  } = movie;

  return (
    <Container>
      <GoBackLink to={backLinkHref}>Go Back</GoBackLink>
      <WrapMainInfo>
        <Image
          src={
            poster_path !== null
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : defaultImage
          }
          alt={original_title}
        />

        <WrapInfo>
          <Title>
            {original_title} (
            {release_date ? new Date(release_date).getFullYear() : ''})
          </Title>
          {vote_average ? (
            <Text>
              <b>User Score:</b> {Math.round(vote_average * 10)}%
            </Text>
          ) : (
            <Text>
              <b>User Score:</b> No info
            </Text>
          )}
          <Text>
            <b>Overview:</b>
          </Text>
          {overview ? <Text>{overview}</Text> : <Text>No info</Text>}
          {genres ? (
            <Text>
              <b>Genres:</b> {genres.map(genre => genre.name).join(', ')}
            </Text>
          ) : (
            <Text>No info</Text>
          )}
        </WrapInfo>
      </WrapMainInfo>
      <WrapAddInfo>
        <Text style={{ textAlign: 'center' }}>
          <b>Additional information</b>
        </Text>
        <ListAddInfo>
          <ItemAddInfo>
            <StyledNavLink to="cast" state={{ from: backLinkHref }}>
              Cast
            </StyledNavLink>
          </ItemAddInfo>
          <ItemAddInfo>
            <StyledNavLink to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </StyledNavLink>
          </ItemAddInfo>
        </ListAddInfo>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </WrapAddInfo>
    </Container>
  );
};

export default MovieDetails;
