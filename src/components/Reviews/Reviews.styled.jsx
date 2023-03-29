import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const ItemReview = styled.li`
  text-decoration: none;
  padding: 10px;
  margin-bottom: 8px;
  background-color: #c2fbd7;
  &:hover {
    box-shadow: rgba(58, 80, 62, 0.1) 0px 4px 12px;
  }
`;

export const AuthorName = styled.p`
  font-weight: bold;
`;
