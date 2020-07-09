import styled from 'styled-components';

export const MODAL_DIV = styled.div`
  padding: 0;
  margin: 0;
`;

export const CONTENT_DIV = styled.div`
  outline: 4px solid #f0b040;
`;

export const CONTAINER_DIV = styled.div`
  padding: 10px;
  outline: border;
`;

export const FIELD_INPUT = styled.input`
  width: 100%;
  padding: 0.75em 0.75em;
  outline: none;
  :focus {
    border: 3px solid #f0b040;
  }
`;

export const FIELD_TEXTAREA = styled.textarea`
  width: 100%;
  padding: 0.75em 0.75em;
  outline: none;
  :focus {
    border: 3px solid #f0b040;
  }
`;
