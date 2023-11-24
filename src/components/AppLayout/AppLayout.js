import { GlobalStyle } from 'components/GlobalStyle';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { AppWrapper, Header, Nav, NavLink, NavList, NavListItem } from './AppLayout.styled';

export const AppLayout = () => {
  return (
    <AppWrapper>
      <Header>
        <Nav>
          <NavList>
            <NavListItem>
              <NavLink to="/">Home</NavLink>
            </NavListItem>
            <NavListItem>
              <NavLink to="/movies">Movies</NavLink>
            </NavListItem>
          </NavList>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>

      <GlobalStyle />
      <Toaster />
    </AppWrapper>
  );
};
