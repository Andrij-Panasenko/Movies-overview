export const SearchForm = ({ onLoad }) => {
  return (
    <>
      <form onSubmit={onLoad}>
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
