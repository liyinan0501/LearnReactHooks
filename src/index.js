import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  const [count, setCount] = useState(0)
  const [money, setMoney] = useState(1000)
  return (
    <div>
      <h3>Root Component</h3>
      <div>Counter: {count}</div>
      <button onClick={() => setCount(count + 1)}>Click +1</button>
      <br />
      <div>Money: {money}</div>
      <button onClick={() => setMoney(money + 100)}>Money +100</button>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
