import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchMovieTrendingDay } from 'services/api_movie';
import MoviesList from 'components/MoviesList';

const Home = () => {
  //   const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    //  setLoading(true);
    async function getMovieTrendingDay() {
      try {
        const data = await fetchMovieTrendingDay();
        setMovies(data);
        //   setLoading(false);
      } catch (error) {
        console.warn('Something went wrong');
      }
    }
    getMovieTrendingDay();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {movies && <MoviesList movies={movies} location={location} />}
    </main>
  );
};

export default Home;
