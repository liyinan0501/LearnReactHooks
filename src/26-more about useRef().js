import { useEffect, useRef } from 'react'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'

//Todo 利用 useRef.current 拿到最新的state。
// 方法2： let num1 = 0 也可以用位于函数外的全局变量，拿到最新的state。
// 方法2：弊端-若此组件多次渲染，全局变量会被影响。
const App = () => {
  const [count, setCount] = useState(0)
  const aRef = useRef(null)
  // 组件无论更新多少回 Ref 是同一个 Ref，证明：
  // useEffect(() => {
  //   console.log('APP Updated')
  // }, [aRef])

  const showCount = () => {
    setTimeout(() => {
      console.log(aRef.current)
      // console.log(num1);
    }, 3000)
  }
  const add = () => {
    setCount(count + 1)
    aRef.current = count + 1
    // num1 = count + 1
  }

  return (
    <div>
      <h1>Root Component</h1>
      <h3>Counter:{count}</h3>
      <button onClick={add}>+1</button>
      <button onClick={showCount}>Show Count</button>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
