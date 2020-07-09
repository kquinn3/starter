import React from 'react';

import { CONTAINER_DIV, FIELD_INPUT, ICON_I } from './custom-input.styles';

const CustomInput = ({
  inputParams: { iconClass, ...otherProps },
  handleChange,
  value,
}) => (
  <CONTAINER_DIV>
    {iconClass !== undefined && <ICON_I className={iconClass}></ICON_I>}
    <FIELD_INPUT
      {...otherProps}
      required
      value={value}
      onChange={handleChange}
    />{' '}
  </CONTAINER_DIV>
);

export default CustomInput;
