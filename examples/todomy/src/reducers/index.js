import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
//此处决定了store的结构
//
const todoApp = combineReducers({
  todos,//[]
  visibilityFilter//showall
})

export default todoApp
