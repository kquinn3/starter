import React, { Fragment } from 'react';

import {
  CARD_DIV,
  CARDTITLE_P,
  CARDBIG_IMG,
  CARDSHORT_IMG,
  CARDSQUARE_IMG,
  CARDSUBTITLE_P,
  CARDBODY_DIV,
} from './custom-card.styles';

const CustomCard = ({
  title,
  SQUARE,
  BIG,
  SHORT,
  image,
  imageUrl,
  subTitle,
  subParagraph,
  NOSUB,
  NOIMAGE,
}) => {
  return (
    <CARD_DIV BIG={BIG} className='card'>
      <CARDTITLE_P className='card-title'>{title}</CARDTITLE_P>
      {NOIMAGE ? (
        <Fragment>
          <CARDBODY_DIV className='card-body'>
            <p>Put decription or a picture here</p>
          </CARDBODY_DIV>
        </Fragment>
      ) : (
        <Fragment>
          <a href={imageUrl} target='_blank' rel='noopener noreferrer'>
            {SQUARE && <CARDSQUARE_IMG className='card-image' src={image} />}
            {BIG && <CARDBIG_IMG className='card-image' src={image} />}
            {SHORT && <CARDSHORT_IMG className='card-image' src={image} />}
          </a>
          {!NOSUB &&
            subTitle.map((text) => (
              <CARDSUBTITLE_P key={text.id} className='card-subtitle'>
                {text.description}
              </CARDSUBTITLE_P>
            ))}
          {subParagraph && (
            <CARDSUBTITLE_P className='card-subtitle'>
              {subParagraph}
            </CARDSUBTITLE_P>
          )}
        </Fragment>
      )}
    </CARD_DIV>
  );
};

export default CustomCard;
