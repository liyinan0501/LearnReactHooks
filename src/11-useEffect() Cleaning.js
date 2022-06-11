import { clear } from '@testing-library/user-event/dist/clear'
import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

// useEffect() Cleaning
// 组件卸载时需要清除 effect 创建的诸如订阅, 计时器 ID, 给window注册事件等资源。
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3>Root Component</h3>
      <div>Counter: {count}</div>
      <button onClick={() => setCount(count + 1)}>Click +1</button>
      {/* 语法：点到5后，销毁Child */}
      {/* {count < 5 && <Child count={count}></Child>}  */}
      {count < 5 ? <Child count={count}></Child> : <h3>It's dead!</h3>}
    </div>
  )
}
function Child({ count }) {
  // useEffect()
  // 参数1：回调函数 + 回调函数里的return函数
  // 参数2：数组 （useEffect的依赖项-可以依赖多个）
  useEffect(() => {
    console.log('useEffect')
    let timer = window.setInterval(() => {
      console.log(`Don't hit me!`)
    }, 1000)
    // 返回的函数称为清理副作用的函数
    //* return 执行机制：
    // 1. 组件销毁的时候执行(=componentWillUnmount)
    // 2. 回调函数每次执行之前执行 (来清除上一次带来的副作用)。
    return () => {
      console.log('Cleaned!')
      clearInterval(timer)
    }
  }, [])
  // = componentDidMount + componentWillUnmount
  return (
    <div>
      <h3>Child Component --- {count}</h3>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
/*
   1. userEffect 语法
   userEffect(() => {})  组件第一次渲染以及每一次更新都会执行。

   userEffect(() => {}, []) 组件第一次渲染会执行。

   userEffect(() => {}, [依赖项]) 组建第一次渲染会执行，并且依赖项发生变化也会执行。

   2. 清理副作用的语法

   当组件销毁的时候，以及每次回调函数执行之前，都会清理副作用。
   userEffect(() => {
     return () => {
       清理副作用
     }
   })

    当组件销毁的时候，会清理副作用。
    userEffect(() => {
     return () => {
       清理副作用
     }
   }, [])
 */
