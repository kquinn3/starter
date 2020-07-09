import React from 'react';

import { CONTAINER_DIV, FIELD_BUTTON } from './custom-button.styles';

const CustomButton = ({ SIZE, onClick, ...otherProps }) => (
  <CONTAINER_DIV SIZE={SIZE}>
    <FIELD_BUTTON {...otherProps} onClick={onClick} />
  </CONTAINER_DIV>
);

export default CustomButton;
