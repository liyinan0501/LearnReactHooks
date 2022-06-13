import { createRoot } from 'react-dom/client'
import { useState, memo, useMemo } from 'react'

// memo()-useMemo()
// 作用：useMemo() 记忆任意数据，这个被记住的数据一直生效，知道依赖项发生改变。
// 区别：useCallback()记忆的整个函数，而useMemo()记忆的是数据。
// `useCallback(fn, deps)` 相当于 `useMemo(() => fn, deps)`
// 用途：在组件中要进行昂贵的计算，需要把这类函数放到useMemo里。
const App = () => {
  const [life, setLife] = useState(5)
  const [money, setMoney] = useState(1000)

  const addLife = useMemo(
    () => () => {
      setLife(life + 1)
    },
    [life]
  )
  // 以上等于=:
  // const addLife = useMemo(() => {
  //   return () => {
  //     setLife(life + 1)
  //   }
  // }, [life])

  return (
    <div>
      <h1>Root Component</h1>
      <h2>Money: {money}</h2>
      <button onClick={() => setMoney(money + 100)}>Add Money</button>
      <h2>Monster Life: {life}</h2>
      <button onClick={() => setLife(life - 1)}>Attack -1</button>
      <hr />
      {life > 0 ? (
        <Child1 addLife={addLife}></Child1>
      ) : (
        <h3>Monster is dead!</h3>
      )}
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
