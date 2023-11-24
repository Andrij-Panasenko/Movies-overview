import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  margin-bottom: 40px;
`;

export const Img = styled.img`
  width: 400px;
  height: 600px;
`;

export const InfoWrapp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const MovieTitle = styled.h1`
  font-size: 48px;
`;


export const Overview = styled.h2`
  margin-bottom: 10px;
`;


export const Genres = styled.h2`
  margin-bottom: 10px;
`;

export const GenresList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const GenreItem = styled.li`
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid #ffd466;
`;
