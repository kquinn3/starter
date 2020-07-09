import React, { useState } from 'react';

import ContactForm from '../contact-form/contact-form.component';

import { MODAL_DIV, CONTENT_DIV } from './contact-modal.styles';

const ContactModal = () => {
  return (
    <MODAL_DIV className='modal' id='contactModal'>
      <div className='modal-dialog'>
        <CONTENT_DIV className='modal-content'>
          <div className='modal-header color-2-inv'>
            <h5 className='modal-title'>Get In Touch</h5>
            <button className='close color-2-inv' data-dismiss='modal'>
              &times;
            </button>
          </div>
          <div className='modal-body color-1'>
            <ContactForm />
          </div>
          <div className='modal-footer color-1'>
            <button className='btn btn-danger' data-dismiss='modal'>
              Close
            </button>
          </div>
        </CONTENT_DIV>
      </div>
    </MODAL_DIV>
  );
};

export default ContactModal;
