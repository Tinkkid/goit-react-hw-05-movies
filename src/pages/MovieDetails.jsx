import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetail } from 'services/api_movie';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);

  //   const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const data = await fetchMovieDetail(movieId);
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.warn('Something went wrong');
      }
    }
    getMovieDetails();
  }, [movieId]);

  const { original_title, poster_path } = movie;

  return (
    <div>
      <h2>{original_title}</h2>
      <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="" />
    </div>
  );
};

export default MovieDetails;
