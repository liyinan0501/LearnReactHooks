import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  // Hooks：
  // Hooks 只能直接出现在 函数组件 中，不能嵌套在 if/for/其他函数中！

  // useState(0)：
  // 参数：初始值
  // 返回值：是一个数组，长度为2。
  // 数组下标0：就是这个状态
  // 数组下标1：修改这个状态的函数
  const [count, setCount] = useState(0)
  const [money, setMoney] = useState(1000)
  const [user, setUser] = useState({
    name: 'Tom',
    age: 18,
  })
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

// class App extends Component {
//   state = {
//     count: 0,
//   }
//   add = () => {
//     this.setState({
//       count: this.state.count + 1,
//     })
//   }
//   render() {
//     return (
//       <div>
//         <h3>Root Component</h3>
//         <div>Counter: {this.state.count}</div>
//         <button onClick={this.add}>Click +1</button>
//       </div>
//     )
//   }
// }

createRoot(document.getElementById('root')).render(<App />)
