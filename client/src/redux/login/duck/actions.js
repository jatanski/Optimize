import types from "./types";

const login = item => ({ type: types.LOG_IN, item });
const logout = item => ({ type: types.LOG_OUT, item });
const setUser = user => ({ type: types.SET_USER, user })

export default {
  login,
  logout,
  setUser
};
