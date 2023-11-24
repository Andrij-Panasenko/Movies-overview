import { ProgressBar } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{ }}
        wrapperClass="progress-bar-wrapper"
        borderColor="#F4442E"
        barColor="#FFD466"
      />
    </Wrapper>
  );
};
