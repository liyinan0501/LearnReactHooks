import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

// useEffect()
// 用来解决副作用的，操作副作用的时候需要放到 useEffect() 里面。
// * 函数的主作用：是用来渲染UI的
// * 函数的副作用：除了渲染UI之外的操作
// 常见副作用例子：
// Ajax 请求，手动修改DOM, localStorage 等

// 例如 class 中
// render() //* Main Effect
// componentDidMount  //* Side Effect
// componentDidUpdate //* Side Effect
// componentWillUnmount //* Side Effect

function App() {
  const [count, setCount] = useState(0)
  // useEffect() 参数是一个函数，useEffect()会在组件渲染好的时候执行。
  // useEffect() = (componentDidMount + componentDidUpdate)
  //! 无论改了什么数据 useEffect() 都会执行。
  useEffect(() => {
    document.title = `Counter: ${count}`
  })
  return (
    <div>
      <h3>Root Component</h3>
      <div>Counter: {count}</div>
      <button onClick={() => setCount(count + 1)}>Click +1</button>
    </div>
  )
}

//* 对比用 Class 来实现上述操作：
class App1 extends React.Component {
  state = {
    count: 0,
  }
  componentDidMount() {
    document.title = `Counter: ${this.state.count}`
  }
  componentDidUpdate() {
    document.title = `Counter: ${this.state.count}`
  }
  render() {
    return (
      <div>
        <h1>Root Component</h1>
        <div>Counter: {this.state.count}</div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click +1
        </button>
      </div>
    )
  }
}

createRoot(document.getElementById('root')).render(<App />)
