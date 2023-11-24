import styled from 'styled-components';
import { NavLink as NavigationLink } from 'react-router-dom';

export const AppWrapper = styled.div`
  padding: 30px;
`;

export const Nav = styled.nav`
`;

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  background-color: #4c4e5c;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 15px;

  /* display: flex;
  justify-content: flex-start;
  align-items: center; */
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 700;
  font-size: 30px;
  
`;

export const NavListItem = styled.li``;

export const NavLink = styled(NavigationLink)`
  text-decoration: none;
  border-radius: 15px;
  padding: 5px;
  color: #ffffff;
  transition: color 200ms linear;

  &:hover,
  &:focus {
   color: #FFD466;
  }
`;
