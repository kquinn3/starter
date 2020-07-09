import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NAV_LI = styled.li`
  margin: 0 1em;
  margin-right: 0;
`;

export const NAV_A = styled.a`
  font-size: 1em;
  padding: 0.5rem;
  padding-left: 0;
  @media (min-width: 1200px) {
    font-size: 1.25em;
  }
  :hover {
    color: #ffffff;
  }
`;

export const NAV_LINK = styled(Link)`
  font-size: 1em;
  padding: 0.5rem;
  padding-left: 0;
  @media (min-width: 1200px) {
    font-size: 1.25em;
  }
  :hover {
    color: #ffffff;
  }
`;

export const NAV_BUTTON = styled.button`
  font-size: 1em;
  padding: 0.5rem;
  padding-left: 0;
  border: 0;
  @media (min-width: 1200px) {
    font-size: 1.25em;
  }
  :hover {
    color: #ffffff;
  }
  :focus {
    outline: none;
  }
`;
