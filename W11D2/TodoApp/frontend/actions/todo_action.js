import * as TodoApiUtil from "../util/todo_api_util"
import {receiveErrors} from "../actions/error_actions"
export const RECEIVE_TODOS = 'RECEIVE_TODOS'

export const RECEIVE_TODO = 'RECEIVE_TODO'

export const REMOVE_TODO = 'REMOVE_TODO'

export const receiveTodos = todos => {
  return {
    type: RECEIVE_TODOS,
    todos
  }
}
export const receiveTodo = todo => {
  return {
    type: RECEIVE_TODO,
    todo
  }
}
export const removeTodo = todo => {
  return {
    type: REMOVE_TODO,
    todo
  }
}

export const fetchTodos = () => dispatch => {
  return TodoApiUtil.fetchTodos()
    .then(todos => dispatch(receiveTodos(todos)))
}

export const createTodo = (todo) => dispatch => {
  return TodoApiUtil.createTodo(todo)
    .then(todo => dispatch(receiveTodo(todo))),
    err => dispatch(receiveErrors(err.responseJSON))
}
