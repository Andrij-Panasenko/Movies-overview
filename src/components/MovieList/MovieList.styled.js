import styled from 'styled-components';
import { Link as ItemLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 25px;
  column-gap: 20px;
  /* justify-content: center; */
  width: 100%;
`;

export const ListItem = styled.li`
  width: 200px;
  width: calc((100% - 140px) / 7);
  text-overflow: ellipsis;
  overflow: hidden;
  text-decoration: none;

  transition: transform 200ms linear;

  &:hover, &:focus {
    transform: scale(1.05);
  }
`;

export const Link = styled(ItemLink)`
  color: #ffffff;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-decoration: none;
`;

export const Img = styled.img`
  border-radius: 10px;
  margin-bottom: 6px;
`;

export const MovieTitle = styled.p``;
