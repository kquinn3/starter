import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import CustomInput from '../../blocks/custom-input/custom-input.component';
import CustomButton from '../../blocks/custom-button/custom-button.component';
import CustomLink from '../../blocks/custom-link/custom-link.component';
import CustomTitleParagraph from '../../blocks/custom-title-paragraph/custom-title-paragraph.component';
import CustomAlert from '../../blocks/custom-alert/custom-alert.component';
import { registerUser } from '../../redux/user/user.actions';

import {
  registerBlock as blockParams,
  registerInput as inputParams,
} from '../../assets/data/text';

import { CONTAINER_DIV } from './register.styles';

const Register = ({
  history,
  user: { isLoggedIn },
  registerUser,
  ...otherProps
}) => {
  const [userIn, setUserIn] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const { name, email, password, passwordConfirm } = userIn;
  const [alert, setAlert] = useState({ status: false, msg: '' });

  useEffect(() => {
    if (isLoggedIn) history.push('/my/home');
  }, [isLoggedIn]);

  useEffect(() => {
    if (alert.status) {
      setTimeout(() => {
        setAlert({ status: false, msg: '' });
      }, 3000);
    }
  }, [alert.status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userIn.name === '' || userIn.email === '' || userIn.password === '') {
      setAlert({ status: true, msg: 'Please enter all fields' });
    } else if (userIn.password !== userIn.passwordConfirm) {
      setAlert({ status: true, msg: 'Passwords do not match' });
    } else {
      const userItem = { name, email, password, passwordConfirm };
      await registerUser(userItem);
      clearInputs();
    }
  };
  const clearInputs = () => {
    setUserIn({ name: '', email: '', password: '', passwordConfirm: '' });
  };
  const handleChange = (e) => {
    setUserIn({ ...userIn, [e.target.name]: e.target.value });
  };

  return (
    <CONTAINER_DIV {...otherProps}>
      <CustomTitleParagraph blockParams={blockParams} />
      <form onSubmit={handleSubmit}>
        <CustomInput
          inputParams={inputParams[0]}
          value={name}
          handleChange={handleChange}
        />
        <CustomInput
          inputParams={inputParams[1]}
          value={email}
          handleChange={handleChange}
        />
        <CustomInput
          inputParams={inputParams[2]}
          value={password}
          handleChange={handleChange}
        />
        <CustomInput
          inputParams={inputParams[3]}
          value={passwordConfirm}
          handleChange={handleChange}
        />
        {alert.status ? (
          <CustomAlert message={alert.msg} />
        ) : (
          <Fragment>
            <CustomButton
              type='submit'
              className='btn btn-block color-2-inv'
              handleClick={handleSubmit}
            >
              Sign Up
            </CustomButton>
            <CustomLink to='/login' className='color-1-no-bg'>
              Already have an account?
            </CustomLink>
          </Fragment>
        )}
      </form>
    </CONTAINER_DIV>
  );
};
const mapStateToProps = (state) => ({
  user: state.user,
});

export default withRouter(connect(mapStateToProps, { registerUser })(Register));
