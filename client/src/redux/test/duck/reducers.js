import types from './types';

const INITIAL_STATE = {
  testStatus: 0,
};

const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_TEST:
      return {
        ...state,
        testStatus: state.testStatus + 1,
      };
    case types.REMOVE_TEST:
      return {
        ...state,
        testStatus: state.testStatus - 1,
      };
    default:
      return state;
  }
};

export default testReducer;
