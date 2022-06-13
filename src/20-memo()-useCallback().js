import { createRoot } from 'react-dom/client'
import React, { useState, memo, useCallback } from 'react'

//* React 更新机制
// 父组件state更新，必然所有的子组件也会更新。

// React.memo()
// 作用：如果函数组件props没有变化，阻止产生不必要的更新。
// 只是做浅层对比，对比地址发没发生改变，不会比里面的值。
// React state 更新原则，不修改原数据（因为地址不会改变），而是覆盖原数据（地址发生改变），从而memo起作用。

//* React.memo()-useCallback()
// useCallback 可以记住函数的引用，在组件每次更新时都指向相同引用的函数。
//* React.memo()-useMemo
// useMemo 可以记住任何数据类型的引用，在组件每次更新时都指向相同引用的数据。
function App() {
  const [count, setCount] = useState(5)
  const [money, setMoney] = useState(1000)
  // 记忆的函数 = useCallback(函数,[依赖])
  // 只要依赖项不变，这个函数就不会变化，如果依赖项变了，这个函数就会变化。
  const extend = useCallback(() => {
    setCount(count + 1)
  }, [count])

  return (
    <div>
      <h1>Root Component -- {count}</h1>
      <button onClick={() => setCount(count - 1)}>Hit -1</button>
      <div>Money: {money}</div>
      <button onClick={() => setMoney(money + 100)}>Add Money</button>
      <hr />
      {count > 0 ? (
        <Child count={count} extend={extend}></Child>
      ) : (
        <h3>Child is dead</h3>
      )}
    </div>
  )
}
// 即使使用了memo，父组件点击Add Money，也会导致Child更新，因为更新Money父组件重新执行，又会有一个新的相同函数赋值给extend，
// 因为函数是复杂数据类型，重新赋值也就是extend 地址发生改变，导致Child也会更新，也就是memo的性能优化失效了。
const Child = memo(({ count, extend }) => {
  console.log('Child updated')
  return (
    <div>
      <h3>Child Component -- {count}</h3>
      <button onClick={extend}>Extend +1</button>
    </div>
  )
})

createRoot(document.getElementById('root')).render(<App />)
