import { createRoot } from 'react-dom/client'
import React, { useState, useContext } from 'react'
const Context = React.createContext() // 如果App和Son不在同一文件中，App需要导出Context，供Son使用
// useContext()
// 作用：实现跨组件传递数据，而不必在每个级别手动传递 props，简化组件之间的数据传递过程
function App() {
  const [color, setColor] = useState('red')
  const [name, setName] = useState('Jack')
  return (
    <Context.Provider value={[color, name]}>
      <div>
        <h1>Root Component</h1>
        <div>Color: {color}</div>
        <button onClick={() => setColor('yellow')}>Change Color</button>
        <div>Name: {name}</div>
        <Father></Father>
      </div>
    </Context.Provider>
  )
}

const Father = () => {
  return (
    <div>
      <h3>Father Component</h3>
      <Son></Son>
    </div>
  )
}

const Son = () => {
  const color = useContext(Context)
  console.log(color)
  return (
    <div>
      <h5>Son Component - {color[1]}</h5>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
