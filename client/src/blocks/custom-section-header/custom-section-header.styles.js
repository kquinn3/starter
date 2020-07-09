import styled from 'styled-components';

export const SPACER_DIV = styled.div`
  height: 100px;
`;

export const NAME_H1 = styled.h1`
  font-weight: 800;
  font-size: 1.5em;
  @media (min-width: 576px) {
    font-size: 1.75em;
  }
  @media (min-width: 768px) {
    font-size: 2em;
  }
  @media (min-width: 992px) {
    font-size: 2.25em;
  }
  @media (min-width: 1200px) {
    font-size: 2.5em;
  }

  :after {
    content: '';
    display: block;
    width: 120px;
    height: 6px;
    margin: 0.5em auto;
    background: #00e880;
    @media (min-width: 1200px) {
      margin: 1em auto;
    }
  }
`;

export const SECTION_P = styled.p`
  font-size: 0.75em;
  margin: 1.5em auto;
  text-align: justify-center;
  line-height: 1.25em;
  @media (min-width: 576px) {
    text-align: center;
    max-width: 540px;
    font-size: 1em;
    line-height: 1.5em;
  }
  @media (min-width: 768px) {
    max-width: 720px;
    font-size: 1.25em;
  }
  @media (min-width: 992px) {
    max-width: 960px;
    font-size: 1.5em;
    line-height: 1.5em;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;
