import { useSearchParams } from 'react-router-dom';

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchHandler = evt => {
    evt.preventDefault();

    const searchQuery = evt.currentTarget.query.value;

    searchParams.set('query', searchQuery.toLowerCase().trim());
    setSearchParams(searchParams);
  };

  return (
    <>
      <form onSubmit={searchHandler}>
        <label>
          <input
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies"
          />
        </label>

        <button type="submit">Search</button>
      </form>
    </>
  );
};
