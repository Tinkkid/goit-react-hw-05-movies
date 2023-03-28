import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieSearch } from 'services/api_movie';
import MoviesList from 'components/MoviesList';
import SearchForm from 'components/SearchBox/SearchBox';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const searchQuery = searchParams.get('name') ?? '';

  useEffect(() => {
    if (!searchQuery) {
      setMovies([]);
      return;
    }
    async function getMovieSearch() {
      try {
        const data = await fetchMovieSearch(searchQuery);
        console.log(data);
        setMovies(data);
      } catch (error) {
        console.warn('Something went wrong');
      }
    }
    if (searchQuery) {
      getMovieSearch();
    }
  }, [searchQuery]);

  const handleMovieNameSubmit = name => {
    if (name) {
      setSearchParams(name);
    }
  };

  //   const handlerSubmit = e => {
  //     e.preventDefault();
  //     const searchParams = e.target.query.value.trim().toLowerCase();
  //     if (!searchParams) return;
  //     setSearchParams({ searchParams });
  //   };

  return (
    <main>
      <SearchForm onSubmit={handleMovieNameSubmit} />
      {/* <form onSubmit={handlerSubmit}>
        <input type="text" name="query" />
      </form> */}

      {movies && <MoviesList movies={movies} location={location} />}
    </main>
  );
};

export default Movies;
