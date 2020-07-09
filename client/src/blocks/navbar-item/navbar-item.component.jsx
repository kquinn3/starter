import React from 'react';
import { STYLED_A, STYLED_LI, STYLED_LINK } from './navbar-item.styles';

const NavbarItem = ({ refLink, text, NOLI, LINK }) => {
  return NOLI ? (
    LINK ? (
      <STYLED_LINK className='nav-link color-2' to={refLink}>
        {text}{' '}
      </STYLED_LINK>
    ) : (
      <STYLED_A className='nav-link color-2' href={refLink}>
        {text}{' '}
      </STYLED_A>
    )
  ) : (
    <STYLED_LI
      className='nav-item text-left'
      data-toggle='collapse'
      data-target='#navbarCollapse'
    >
      {LINK ? (
        <STYLED_LINK className='nav-link color-2' to={refLink}>
          {text}{' '}
        </STYLED_LINK>
      ) : (
        <STYLED_A className='nav-link color-2' href={refLink}>
          {text}{' '}
        </STYLED_A>
      )}
    </STYLED_LI>
  );
};

export default NavbarItem;
