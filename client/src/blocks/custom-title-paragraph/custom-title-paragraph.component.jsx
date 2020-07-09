import React, { Fragment } from 'react';

import {} from './custom-title-paragraph.styles';

const CustomTitleParagraph = ({
  blockParams: { blockIcon, blockTitle, blockParagraph },
}) => {
  return (
    <Fragment>
      <h1 className='text-center mb-3'>
        <i className={blockIcon}></i>
        <span className='ml-3'>{blockTitle}</span>
      </h1>

      <p>{blockParagraph}</p>
    </Fragment>
  );
};

export default CustomTitleParagraph;
