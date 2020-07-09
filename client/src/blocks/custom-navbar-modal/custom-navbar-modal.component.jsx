import React from 'react';
import { ITEM_LI, MODAL_BUTTON } from './custom-navbar-modal.styles';

const CustomNavbarModal = ({ text, modal }) => {
  return (
    <ITEM_LI
      className='nav-item text-left'
      data-toggle='collapse'
      data-target='#navbarCollapse'
    >
      <MODAL_BUTTON className='color-2' data-toggle='modal' data-target={modal}>
        {text}{' '}
      </MODAL_BUTTON>
    </ITEM_LI>
  );
};

export default CustomNavbarModal;
