import React from 'react';

import { CONTAINER_DIV } from './spacer-div.styles';

const SpacerDiv = ({ HEIGHT, ...otherProps }) => {
  return <CONTAINER_DIV HEIGHT={HEIGHT} {...otherProps} />;
};

export default SpacerDiv;
