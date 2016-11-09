import otherInfo from './list.js';
import { combineReducers } from 'redux';
const inAndDeCrease = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
export default combineReducers({
  otherInfo: otherInfo,
  counter: inAndDeCrease
});
