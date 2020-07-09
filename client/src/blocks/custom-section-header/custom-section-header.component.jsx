import React, { Fragment } from 'react';
import { SPACER_DIV, NAME_H1, SECTION_P } from './custom-section-header.styles';

const CustomSectionHeader = ({ ID, HEAD1, PARA, SKIP }) => {
  return (
    <Fragment>
      <div id={ID}></div>
      <SPACER_DIV />

      {!SKIP && (
        <Fragment>
          <NAME_H1>{HEAD1}</NAME_H1>
          <SECTION_P>{PARA}</SECTION_P>
        </Fragment>
      )}
    </Fragment>
  );
};

export default CustomSectionHeader;
