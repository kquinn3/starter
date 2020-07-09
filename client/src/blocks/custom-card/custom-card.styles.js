import styled from 'styled-components';

export const CARD_DIV = styled.div`
  padding: 0.5em;
  margin: 1em auto;
  max-width: 400px;
  height: ${(props) => (props.BIG ? '316px' : '150px')};
  @media (min-width: 768px) {
    height: ${(props) => (props.BIG ? '416px' : '200px')};
  }
`;

export const CARDTITLE_P = styled.p`
  font-size: 1em;
  margin: 0 auto;
  font-weight: 600;
  @media (min-width: 576px) {
    font-size: 1.5em;
  }
`;
export const CARDSUBTITLE_P = styled.p`
  margin: 0 auto;
  padding: 0 2em;
  font-weight: 600;
  line-height: 1.5em;
  text-align: left;
  @media (min-width: 992px) {
    font-size: 1.25em;
    padding: 0 1em;
  }
`;

export const CARDSHORT_IMG = styled.img`
  background: #ffffff;
  padding: 0.5em;
  width: 55%;
  margin: 0.75em auto;
`;
export const CARDBIG_IMG = styled.img`
  background: #ffffff;
  padding: 0.5em;
  width: 70%;
  margin: 0.85em auto;
`;
export const CARDSQUARE_IMG = styled.img`
  background: #ffffff;
  padding: 0.5em;
  width: 30%;
  margin: 0.75em auto;
`;

export const CARDBODY_DIV = styled.div`
  height: 200px;
`;
