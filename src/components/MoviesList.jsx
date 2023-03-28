// import MoviesItem from './MoviesItem';

// import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(({ title, poster_path, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <div>
              {poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                ></img>
              ) : (
                <img
                  src={
                    'https://cdn.pixabay.com/photo/2023/03/23/09/14/mountain-7871524_960_720.jpg'
                  }
                  alt="smt"
                ></img>
              )}
              <h2>{title}</h2>
            </div>
          </Link>
        </li>
      ))}

      {/* {
         
        return (
          <MoviesItem
            key={id}
            title={title}
            url={poster_path}
            activeId={id}
            location={location}
          />
        );
      })} */}
    </ul>
  );
};
export default MoviesList;
