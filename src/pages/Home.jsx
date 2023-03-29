import { useState, useEffect } from 'react';

import { fetchMovieTrendingDay } from 'services/api_movie';
import MoviesList from '../components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchMovieTrendingDay()
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(setLoading(false));
  }, []);
  if (!movies) return;

  return (
    <main>
      <h2
        style={{
          textAlign: 'center',
        }}
      >
        Trending today
      </h2>
      {loading && <Loader />}
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};

export default Home;
