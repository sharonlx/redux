import { combineReducers } from 'redux';
import other  from './others.js';
import curState  from './curstate.js';

/**
state is like :
{
  isFetch: true,
  isError: false,
  list: []
}
*/
const listState =  (state = {
    isFetch: true,
    isError: false,
    curPage: 0,
    list: []
  }, action) => {
  switch (action.type) {
    case 'LIST_ADD_ITEM_ACTION':
      return {
        isFetch: state.isFetch,
        isError: state.isError,
        curPage: 0,
        list: [...state.list, action.data.item]
      }
    case 'LIST_REQUEST_ACTION':
      return Object.assign({}, state, {isFetch: true, curPage: action.data.curPage});
      return
    case 'LIST_RECEIVE_ACTION':
      return Object.assign({}, state, {isFetch: false, list: action.data.list});
    default:
      return state
  }
};
export default combineReducers({
  listState,
  other,
  curState
});
