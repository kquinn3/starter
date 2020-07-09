import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const STYLED_LI = styled.li`
  margin: 0 1em;
  margin-right: 0;
`;

export const STYLED_A = styled.a`
  font-size: 1em;
  padding-left: 0;
  @media (min-width: 1200px) {
    font-size: 1.25em;
  }
  :hover {
    color: #ffffff;
  }
`;

export const STYLED_LINK = styled(Link)`
  font-size: 1em;
  @media (min-width: 1200px) {
    font-size: 1.25em;
  }
  :hover {
    color: #ffffff;
  }
`;
