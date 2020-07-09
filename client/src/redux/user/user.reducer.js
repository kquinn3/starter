import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  isLoggedIn: false,
  name: '',
  email: '',
  role: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.REGISTER_SUCCESS:
    case UserActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
      };
    case UserActionTypes.USER_LOADED:
      return {
        ...state,
        isLoggedIn: true,
        name: action.payload.name,
        email: action.payload.email,
        role: action.payload.role,
      };
    case UserActionTypes.REGISTER_FAIL:
    case UserActionTypes.LOGIN_FAIL:
    case UserActionTypes.LOGOUT_FAIL:
    case UserActionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        name: '',
        email: '',
        role: '',
      };
    default:
      return state;
  }
};

export default userReducer;
