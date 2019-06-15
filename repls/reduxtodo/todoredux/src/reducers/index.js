import {combineReducers} from 'redux'
import todos from './todos'
import addTodos from './addTodo'

export default combineReducers({
  todos,
  addTodos
})