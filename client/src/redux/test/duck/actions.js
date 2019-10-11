import types from './types';

const addTest = item => ({ type: types.ADD_TEST, item });
const removeTest = item => ({ type: types.REMOVE_TEST, item });

export default {
  addTest,
  removeTest,
};
