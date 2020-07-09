import React, { Fragment } from 'react';
import {
  NAV_LI,
  NAV_BUTTON,
  NAV_A,
  NAV_LINK,
} from './custom-navbar-item.styles';

const ConditionalWrapper = ({ condition, wrapper, children }) => {
  return condition ? wrapper(children) : children;
};

const CustomNavbarItem = ({
  WRAPLI,
  element,
  refLink,
  text,
  handler,
  ...otherProps
}) => {
  return (
    <Fragment>
      <ConditionalWrapper
        condition={WRAPLI}
        wrapper={(children) => (
          <NAV_LI
            className='nav-item text-left'
            data-toggle='collapse'
            data-target='#navbarCollapse'
          >
            {children}
          </NAV_LI>
        )}
      >
        {element === 'Button' && (
          <NAV_BUTTON
            className='nav-link color-nav'
            onClick={handler}
            {...otherProps}
          >
            {text}
          </NAV_BUTTON>
        )}
        {element === 'Link' && (
          <NAV_LINK className='nav-link color-nav' to={refLink} {...otherProps}>
            {text}
          </NAV_LINK>
        )}
        {element === 'A' && (
          <NAV_A className='nav-link color-nav' href={refLink} {...otherProps}>
            {text}
          </NAV_A>
        )}
      </ConditionalWrapper>
    </Fragment>
  );
};

export default CustomNavbarItem;
