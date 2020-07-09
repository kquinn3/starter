import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CONTAINER_DIV = styled.div`
  width: 100%;
  padding: 10px;
  outline: none;
  display: flex;
`;

export const FIELD_LINK = styled(Link)`
  height: 50px;
  margin: 10px auto;
  outline: none;
  &:hover {
    color: #000000;
    font-size: 1.5em;
  }
`;
