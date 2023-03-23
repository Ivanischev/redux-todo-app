import { ADD_TODO, COMPLETE_TODO } from './todoActionConstants'

export const addTodo = (newTodo) => {
  return { type: ADD_TODO, payload: newTodo }
}

export const completeTodo = (todoId) => {
  return { type: COMPLETE_TODO, payload: todoId }
}
