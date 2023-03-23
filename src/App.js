import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { addTodo, completeTodo } from './redux/todo'

function App() {
  const [value, setValue] = useState('')
  const store = useSelector((state) => state.todoList)
  const dispatch = useDispatch()

  const inputHandler = (e) => {
    setValue(e.target.value)
  }

  const handlerAddButton = (e) => {
    e.preventDefault()
    const newTodo = {
      title: value,
      id: Math.random(),
      done: false,
    }
    dispatch(addTodo(newTodo))
    setValue('')
  }

  const handlerCompleteTodo = (item) => {
    dispatch(completeTodo(item.id))
  }

  return (
    <div className="App">
      <div className="main-container">
        <form>
          <input type="text" value={value} onChange={inputHandler} />
          <button type="sumbit" onClick={(e) => handlerAddButton(e)}>
            Add
          </button>
        </form>
        <ul>
          {store.map((item) => (
            <li key={item.id} className={item.done ? 'complete' : 'uncomplete'}>
              <button onClick={() => handlerCompleteTodo(item)}>✓</button>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
