import PropTypes from 'prop-types';
import { List, ItemMovie, LinkStyled, Image, Title } from './MoviesList.styled';

const defaultImage =
  'https://cdn.pixabay.com/photo/2016/11/09/23/16/music-1813100_960_720.png';

const MoviesList = ({ movies, location }) => {
  return (
    <List>
      {movies.map(({ id, title, poster_path, release_date }) => (
        <ItemMovie key={id}>
          <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
            <Image
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : defaultImage
              }
              alt={title ? title : 'No title'}
            />
            <Title>{title ? title : 'No title'}</Title>
            <Title>
              {release_date ? new Date(release_date).getFullYear() : ''}
            </Title>
          </LinkStyled>
        </ItemMovie>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
    })
  ),
};

export default MoviesList;
