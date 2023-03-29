import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Nav,
  NavLinkStyled,
  Container,
  Logo,
  LinkWrap,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Nav>
        <LinkWrap>
          <NavLinkStyled to="/" end>
            Home
          </NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </LinkWrap>
        <Logo></Logo>
      </Nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
