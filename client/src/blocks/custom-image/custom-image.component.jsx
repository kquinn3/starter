import React from 'react';

import { CONTAINER_DIV, FIELD_IMG } from './custom-image.styles';

const CustomImage = ({ src, alt, ...otherProps }) => (
  <CONTAINER_DIV>
    <FIELD_IMG src={src} alt={alt} {...otherProps} />
  </CONTAINER_DIV>
);

export default CustomImage;
