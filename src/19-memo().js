import { createRoot } from 'react-dom/client'
import React, { useState, memo } from 'react'

//* React 更新机制
// 父组件state更新，必然所有的子组件也会更新。
// 但是Child2 更新很快，因为生成的虚拟DOM和老的虚拟DOM是一样的，不需要操作DOM。
// 相反Child1,因为生成的虚拟DOM和老的虚拟DOM是不一样的，需要操作DOM。

// React.memo()
// 作用：如果函数组件props没有变化，阻止产生不必要的更新。
// 只是做浅层对比，对比地址发没发生改变，不会比里面的值。
// React state 更新原则，不修改原数据（因为地址不会改变），而是覆盖原数据（地址发生改变），从而memo起作用。
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Root Component -- {count}</h1>

      <button onClick={() => setCount(count + 1)}>click +1</button>
      <Child1 count={count}></Child1>
      <Child2></Child2>
    </div>
  )
}

// 对于Child1来说，memo起了反作用，用不用memo无论如何Child1都需要渲染，因为memo是高阶组件，memo无形之中给Child1加上了一些东西。
const Child1 = memo(({ count }) => {
  console.log('Child1 updated')
  return <div>Child1 Component -- {count} </div>
})

// 如果知道Child2以后不需要依赖什么数据(也就是props不会更新)，就可以用memo，避免不必要的更新。
const Child2 = memo(() => {
  console.log('Child2 updated')
  return <div>Child2 Component </div>
})

createRoot(document.getElementById('root')).render(<App />)
