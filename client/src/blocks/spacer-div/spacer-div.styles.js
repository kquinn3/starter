import styled from 'styled-components';

export const CONTAINER_DIV = styled.div`
  height: ${(props) => (props.HEIGHT ? props.HEIGHT : '100px')};
`;
