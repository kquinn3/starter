import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CustomInput from '../../blocks/custom-input/custom-input.component';
import CustomButton from '../../blocks/custom-button/custom-button.component';
import CustomLink from '../../blocks/custom-link/custom-link.component';
import CustomTitleParagraph from '../../blocks/custom-title-paragraph/custom-title-paragraph.component';
import CustomAlert from '../../blocks/custom-alert/custom-alert.component';
import { loginUser } from '../../redux/user/user.actions';

import {
  loginBlock as blockParams,
  loginInput as inputParams,
} from '../../assets/data/text';

import { CONTAINER_DIV } from './login.styles';

const Login = ({ history, user: { isLoggedIn }, loginUser, ...otherProps }) => {
  const [userIn, setUserIn] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userIn;
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
    if (userIn.email === '' || userIn.password === '') {
      setAlert({ status: true, msg: 'Please enter all fields' });
    } else {
      const userItem = { email, password };
      await loginUser(userItem);
      clearInputs();
    }
  };
  const clearInputs = () => {
    setUserIn({ email: '', password: '' });
  };
  const handleChange = (e) => {
    setUserIn({ ...userIn, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <CONTAINER_DIV {...otherProps}>
        <CustomTitleParagraph blockParams={blockParams} />
        <form onSubmit={handleSubmit}>
          <CustomInput
            inputParams={inputParams[0]}
            value={email}
            handleChange={handleChange}
          />
          <CustomInput
            inputParams={inputParams[1]}
            value={password}
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
                Sign In
              </CustomButton>
              <CustomLink to='/register' className='color-1-no-bg'>
                I Don't have an account
              </CustomLink>
            </Fragment>
          )}
        </form>
      </CONTAINER_DIV>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default withRouter(connect(mapStateToProps, { loginUser })(Login));
