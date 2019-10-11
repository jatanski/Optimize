import types from "./types";

const INITIAL_STATE = {
  loginStatus: false,
  user: {}
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOG_IN:
      return {
        ...state,
        loginStatus: true
      };
    case types.LOG_OUT:
      return {
        ...state,
        loginStatus: false
      };
    case types.SET_USER:
      return {
        ...state,
        user: {
            ...state.user,
            name: action.user.name,
            email: action.user.email,
            id: action.user._id,
        }
      };
    default:
      return state;
  }
};

export default loginReducer;
