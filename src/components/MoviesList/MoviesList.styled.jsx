import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const ItemMovie = styled.li`
  text-decoration: none;
  margin-bottom: 8px;
  background-color: #c2fbd7;
  &:hover {
    box-shadow: rgba(58, 80, 62, 0.1) 0px 4px 12px;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid #eee;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;

  &:hover {
    color: #24964f;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
`;
