import { InfinitySpin } from 'react-loader-spinner';
import { Spinner } from './Loader.styled';

export const Loader = () => {
  return (
    <Spinner>
      <InfinitySpin color="#f0b629" />
    </Spinner>
  );
};
