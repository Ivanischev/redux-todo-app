import { useState } from 'react'
import './App.css'
import Counter from './Counter'

function App() {
  const [value, setValue] = useState('')

  const inputHandler = (e) => {
    setValue(e.target.value)
  }
  console.log(value)
  return (
    <div className="App">
      <div className="main-container">
        <Counter />
        <input type="text" value={value} onChange={inputHandler} />
        <p>{value}</p>
      </div>
    </div>
  )
}

export default App
