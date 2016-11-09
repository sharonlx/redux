import { combineReducers } from 'redux'


const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
    debugger
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
