// import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import store from '../store/index.js'
import React  from 'react'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

// const mapStateToProps = (state) => ({
//   todos: getVisibleTodos(state.todos, state.visibilityFilter)
// })

// const mapDispatchToProps =  ({
//   onTodoClick: toggleTodo
// })

// const VisibleTodoList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList)

const VisibleTodoList = ()=>{
  let state = store.getState();
  let todos = getVisibleTodos(state.todos, state.visibilityFilter);
  let onTodoClick = (id)=>{
      store.dispatch(toggleTodo(id));
  }
  return (
    <TodoList onTodoClick={onTodoClick} todos={todos} />
  )
}

export default VisibleTodoList
