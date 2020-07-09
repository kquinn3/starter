import React from 'react';

import { TESTIMONIAL_DIV, TESTIMONIAL_P } from './custom-testimonial.styles';

const CustomTestimonial = ({ testimonial }) => {
  return (
    <TESTIMONIAL_DIV className='card'>
      <blockquote className='blockquote'>
        <TESTIMONIAL_P className='mb-0'>
          <i className=' pr-2 fas fa-quote-left' />
          {testimonial}
          <i className='pl-2 fas fa-quote-right' />
        </TESTIMONIAL_P>
      </blockquote>
    </TESTIMONIAL_DIV>
  );
};

export default CustomTestimonial;
