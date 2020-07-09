import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { FIELD_INPUT, FIELD_TEXTAREA } from './contact-form.styles';

const ContactForm = ({ ...otherProps }) => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({ loading: false, isSent: false });

  const { name, email, message } = contact;

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const sendMessage = async (contactPBMF) => {
    setStatus({ ...status, loading: true });
    const config = { headers: { 'Content-Type': 'application/json' } };
    try {
      await axios.post('/api/v1/contact', contactPBMF, config);
      setStatus({ ...status, loading: false, isSent: true });
    } catch (err) {
      console.log('An error occured', err);
      setStatus({ ...status, loading: false, isSent: false });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === '' || email === '' || message === '') {
      console.log('Add a field');
      return;
    }
    const contactMessage = {
      name,
      email,
      message,
    };

    await sendMessage(contactMessage);

    clearInputs();
  };

  const clearInputs = () => {
    setContact({ email: '', name: '', message: '' });
  };

  return (
    <form className='color-1' onSubmit={handleSubmit}>
      <div className='row'>
        <div className='col-6'>
          <FIELD_INPUT
            className='input-field color-1 mb-3'
            type='text'
            name='name'
            value={name}
            placeholder='Enter Name'
            required
            disabled={status.isSent}
            onChange={handleChange}
          />
        </div>
        <div className='col-6'>
          <FIELD_INPUT
            className='input-field color-1 mb-3'
            type='email'
            name='email'
            value={email}
            placeholder='Email Address'
            required
            disabled={status.isSent}
            onChange={handleChange}
          />
        </div>
      </div>
      <FIELD_TEXTAREA
        className='input-field color-1'
        rows='10'
        cols='50'
        type='text'
        name='message'
        value={message}
        placeholder='Enter Message'
        required
        disabled={status.isSent}
        onChange={handleChange}
      />
      {status.isLoading ? (
        <h4>Sending data....</h4>
      ) : status.isSent ? (
        <h4>Your message was sent</h4>
      ) : (
        <button className='color-2-inv' type='submit'>
          Submit Message
        </button>
      )}
    </form>
  );
};

export default ContactForm;
