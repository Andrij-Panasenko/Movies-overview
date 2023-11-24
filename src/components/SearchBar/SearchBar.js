import {  useSearchParams } from 'react-router-dom';
import {
  Button,
  ButtonLabel,
  Input,
  Label,
  Wrapper,
  Form,
} from './SearchBar.styled';

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
      <Form onSubmit={searchHandler}>
        <Wrapper>
          <Input type="text" name="query" autoComplete="off" placeholder="" />
          <Label>Search movies</Label>
        <Button type="submit">
          <ButtonLabel>Search</ButtonLabel>
        </Button>
        </Wrapper>

      </Form>
    </>
  );
};
