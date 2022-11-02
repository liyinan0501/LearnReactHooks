import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

//* useEffect() Dependencies
function App() {
  const [count, setCount] = useState(0)
  const [money, setMoney] = useState(100)

  // 参数1：回调函数
  // 参数2：数组 （useEffect的依赖项-可以依赖多个）
  // 如果定义了参数2，回调函数只会在依赖项发生了改变的时候才会执行。

  //! 定义依赖项：
  //* 触发时机：1.第一次渲染会执行回调函数 2. 当count发生变化时会再次执行回调函数。
  // = componentDidMount + ComponentDidUpdate(判断)
  //* 表示依赖指定数值，任何数值发生变化都会执行useEffect里的回调函数。
  useEffect(() => {
    console.log('Executing useEffect!')
    document.title = `Counter: ${count}`
  }, [count])
  // TODO 如果回调函数用到了什么数据，一定要在依赖项数组内加上这些数据。

  //! 如果依赖项是空数组[]：
  //* 触发时机：只有在组件第一次渲染时执行回调函数。
  // = ComponentDidUpdate
  //* 表示只有在组件第一次渲染后执行useEffect里的回调函数。
  // 使用场景：1.事件绑定 2.发送请求数据等
  // useEffect(() => {
  //   document.addEventListener('click', function () {
  //     console.log('click')
  //   })
  // }, [])

  //! 不写依赖项：
  //* 触发时机：1.第一次渲染会执行回调函数 2.每次组件渲染都会再次执行回调函数。
  // = componentDidMount + ComponentDidUpdate
  //* 表示依赖任何数值，任何数值发生变化都会执行useEffect里的回调函数。
  // useEffect(() => {
  //   document.addEventListener('click', function () {
  //     console.log('click')
  //   })
  // })

  return (
    <div>
      <h3>Root Component</h3>
      <div>Counter: {count}</div>
      <button onClick={() => setCount(count + 1)}>Click +1</button>
      <div>Money: {money}</div>
      <button onClick={() => setMoney(money + 100)}>Add Money</button>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
