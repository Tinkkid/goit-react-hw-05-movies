import { useSearchParams } from 'react-router-dom';

const SearchForm = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  //  const movieTitle = searchParams.get('name') ?? '';

  //  const updateQueryString = name => {
  //    const nextParams = name !== '' ? { name } : {};
  //    setSearchParams(nextParams);
  //  };
  const handlerSubmit = e => {
    e.preventDefault();
    const searchParams = e.target.query.value.trim().toLowerCase();
    if (!searchParams) return;
    setSearchParams({ searchParams });
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input type="text" name="query" />
    </form>

    //  <input
    //    type="text"
    //    name="query"
    //    value={movieTitle}
    //    onChange={e => updateQueryString(e.target.value)}
    //  />
  );
};

export default SearchForm;
