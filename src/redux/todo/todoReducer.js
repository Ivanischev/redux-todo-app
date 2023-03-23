import { ADD_TODO, COMPLETE_TODO } from './todoActionConstants'

const initialState = {
  todoList: [
    {
      title: 'Smth very important',
      id: 1,
      done: false,
    },
    {
      title: 'Another very important thing',
      id: 2,
      done: false,
    },
    {
      title: 'Ordinary thing',
      id: 3,
      done: true,
    },
  ],
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        todoList: [...state.todoList, action.payload],
      }
    }
    case COMPLETE_TODO: {
      return {
        todoList: state.todoList.map((todo) => {
          console.log()
          if (todo.id === action.payload) {
            return {
              ...todo,
              done: !todo.done,
            }
          }
          return todo
        }),
      }
    }

    default:
      return state
  }
}

export default todoReducer
