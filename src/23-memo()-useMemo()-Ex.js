import { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'

// memo()-useMemo()-Ex
const App = () => {
  const total = useMemo(() => {
    console.log('Calculating')
    return Array.from(new Array(10000000))
      .map((item, index) => index + 1)
      .reduce((prev, item) => prev + item, 0)
  }, [])

  const [money, setMoney] = useState(1000)

  return (
    <div>
      <h1>Root Component - {total}</h1>
      <div>Money: {money}</div>
      <button onClick={() => setMoney(money + 100)}>Add Money</button>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
