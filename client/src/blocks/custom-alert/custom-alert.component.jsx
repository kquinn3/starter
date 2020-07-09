import React from 'react';

import { CONTAINER_DIV, ICON_I, ALERT_H3 } from './custom-alert.styles';

const CustomButton = ({ message }) => (
  <CONTAINER_DIV>
    <ICON_I className='fas fa-2x fa-exclamation-triangle icon'></ICON_I>
    <ALERT_H3>{message}</ALERT_H3>
  </CONTAINER_DIV>
);

export default CustomButton;
