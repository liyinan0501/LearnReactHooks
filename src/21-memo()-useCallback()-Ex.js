import { createRoot } from 'react-dom/client'
import { useState, memo, useCallback } from 'react'

// memo()-useCallback()-Ex
const App = () => {
  const [life, setLife] = useState(5)
  const [money, setMoney] = useState(1000)

  const addLife = useCallback(() => {
    setLife(life + 1)
  }, [life])

  return (
    <div>
      <h1>Root Component</h1>
      <h2>Money: {money}</h2>
      <button onClick={() => setMoney(money + 100)}>Add Money</button>
      <h2>Life: {life}</h2>
      <button onClick={() => setLife(life - 1)}>Attack -1</button>
      <hr />
      <Child1 addLife={addLife}></Child1>
      <Child2></Child2>
    </div>
  )
}

const Child1 = memo(({ addLife }) => {
  console.log('Child1 rendered')
  return (
    <div>
      <h3>Child1 Component</h3>
      <button onClick={addLife}>Add life</button>
    </div>
  )
})

const Child2 = memo(() => {
  console.log('Child2 rendered')
  return (
    <div>
      <h3>Child2 Component</h3>
    </div>
  )
})

createRoot(document.getElementById('root')).render(<App />)
