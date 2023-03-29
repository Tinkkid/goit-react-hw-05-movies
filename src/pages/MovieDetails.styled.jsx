import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.section`
  padding: 20px 40px 40px 40px;
`;

export const WrapMainInfo = styled.main`
  display: flex;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: bold;
  white-space: nowrap;
`;

export const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 40px;
`;

export const Image = styled.img`
  width: 250px;
  height: auto;
`;

export const Text = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const WrapAddInfo = styled.div`
  margin-top: 20px;
  border-top: 4px solid #c2fbd7;
  font-size: 18px;
`;

export const ListAddInfo = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 0;
`;

export const ItemAddInfo = styled.li`
  list-style: none;
  margin-bottom: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  color: inherit;
  font-weight: bold;
  text-decoration: none;
  background-color: #c2fbd7;
  border-radius: 5px;
  padding: 10px 10px;

  &:hover,
  &:focus {
    color: #2cbc63;
  }
`;
