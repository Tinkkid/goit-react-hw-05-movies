import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px 20px;
  margin-bottom: 20px;
  background-color: #2cbc63;
  width: fit-content;
  text-decoration: none;
  color: #2e2e2e;
  font-size: 20px;
  font-weight: bold;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 400ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #fff;
    background-color: #26a758;
  }
`;
