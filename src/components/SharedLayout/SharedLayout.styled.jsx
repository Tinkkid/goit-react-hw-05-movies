import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.section`
  margin: 0 auto;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #c2fbd7;
  padding: 30px 40px;
  font-size: 30px;
`;

export const LinkWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #2a2a2a;
  padding: 8px 20px;
  cursor: pointer;
  display: inline-flex;
  font-size: 30px;
  font-weight: bold;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  width: auto;

  &.active {
    color: white;
    background-color: #2cbc63;
  }

  &:hover,
  &:focus {
    color: white;
    background-color: #2cbc63;
  }
`;

export const Logo = styled.span`
  background-image: url('https://cdn3.iconfinder.com/data/icons/solid-amenities-icon-set/64/Film_Festival_2-256.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #c2fbd7;
  width: 60px;
  height: 60px;
`;
