import styled from 'styled-components';

export const CONTAINER_DIV = styled.div`
  width: 100%;
  padding: 10px;
  outline: none;
  display: flex;
  margin: auto;
  @media (min-width: 992px) {
    width: ${(props) => (props.SIZE ? props.SIZE : '100%')};
  }
`;

export const FIELD_BUTTON = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px;
  outline: none;
  &.focus {
    border: 2px solid #f0b040;
  }
`;
