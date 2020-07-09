import styled from 'styled-components';

export const CONTAINER_DIV = styled.div`
  width: 100%;
  padding: 10px;
  outline: none;
  display: flex;
`;

export const FIELD_INPUT = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
  &.focus {
    border: 2px solid #f0b040;
  }
`;

export const ICON_I = styled.i`
  padding: 10px;
  min-width: 50px;
  text-align: center;
`;
