import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapp = styled.div`
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 5px;

  transition: color 200ms linear;

  &:hover,
  &:focus {
    color: #ffd466;
  }
`;

export const AddInfoWrapp = styled.div``;

export const AddInfoTitle = styled.h2`
  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
  gap: 40px;
`;

export const ListItem = styled.li`
  padding: 15px 20px;
  border: 1px solid #ffd466;
  border-radius: 15px;
  color: #ffffff;
  cursor: pointer;

  transition: color 200ms linear, background-color 200ms linear;

  &:hover,
  &:focus {
    background-color: #ffd466;
    color: #000000;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: currentColor;
`;
