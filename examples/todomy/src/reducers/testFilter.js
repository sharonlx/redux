import { combineReducers } from 'redux'

const testFilter = (state = 'test_all', action) => {
  switch (action.type) {
    case 'SET_TEST':
    debugger
      return action.filter
    default:
      return state
  }
}

export default testFilter
