import axios from 'axios';
import { UserActionTypes } from './user.types';

const config = { headers: { 'Content-Type': 'application/json' } };

export const registerUser = (userParams) => async (dispatch) => {
  const output = await regUser(userParams, dispatch);
  output.type === 'REGISTER_SUCCESS' && (await loadUser(dispatch));
};
export const loginUser = (userParams) => async (dispatch) => {
  const output = await logUser(userParams, dispatch);
  output.type === 'LOGIN_SUCCESS' && (await loadUser(dispatch));
};
// Just to get the token
export const logUser = async (userParams, dispatch) => {
  try {
    await axios.post('/api/v1/users/login', userParams, config);
    return dispatch({
      type: UserActionTypes.LOGIN_SUCCESS,
    });
  } catch (err) {
    console.log('Login failed ', err);
    return dispatch({
      type: UserActionTypes.LOGIN_FAIL,
      payload: err.response.data.error,
    });
  }
};

export const regUser = async (userParams, dispatch) => {
  try {
    await axios.post('/api/v1/users/signup', userParams, config);
    return dispatch({
      type: UserActionTypes.REGISTER_SUCCESS,
    });
  } catch (err) {
    return dispatch({
      type: UserActionTypes.REGISTER_FAIL,
      payload: err.response.data.error,
    });
  }
};

const loadUser = async (dispatch) => {
  try {
    const res = await axios.get('/api/v1/users/me', { withCredentials: true });
    console.log('res', res);
    const userInfo = {
      name: res.data.data.data.name,
      email: res.data.data.data.email,
      role: res.data.data.data.role,
    };

    return dispatch({ type: UserActionTypes.USER_LOADED, payload: userInfo });
  } catch (err) {
    return dispatch({ type: UserActionTypes.AUTH_ERROR });
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/v1/users/logout', {
      withCredentials: true,
    });
    console.log('result', res);
    return dispatch({ type: UserActionTypes.LOGOUT });
  } catch (err) {
    return dispatch({ type: UserActionTypes.LOGOUT });
  }
};
