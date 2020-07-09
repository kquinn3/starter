import React from 'react';

import { CONTAINER_DIV, FIELD_LINK } from './custom-link.styles';

const CustomLink = ({ ...otherProps }) => (
  <CONTAINER_DIV>
    <FIELD_LINK {...otherProps} />
  </CONTAINER_DIV>
);

export default CustomLink;
