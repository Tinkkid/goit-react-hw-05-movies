import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchMovieSearch } from 'services/api_movie';
import MoviesList from '../components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery?.trim()) return;

    fetchMovieSearch(searchQuery)
      .then(({ results }) => {
        console.log(results);
        setMovies(results);

        if (results.length === 0) {
          toast.error(`There are no movies for ${searchQuery}, try some else`);
          return;
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, [searchQuery]);

  const handleMovieNameSubmit = name => {
    setSearchParams(name !== '' ? { query: name } : {});
  };

  return (
    <main>
      <Toaster />
      <SearchForm onSubmit={handleMovieNameSubmit} />

      {movies && <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
