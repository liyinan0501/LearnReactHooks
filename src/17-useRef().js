import { useRef } from 'react'
import { createRoot } from 'react-dom/client'
/*
  //* useRef() - 非受控组件
  1. 使用useRef能够创建一个ref对象，这个对象具有current属性。{current:null}
    const xxRef = useRef(null)

  2. 通过ref属性关联到某个DOM对象 {current:DOM}
    <div ref={xxRef}></div>

  3. 可以通过 xxRef.current 访问到对应的DOM

  //* 作用：
  1. 只要在React中进行DOM操作，都可以通过useRef来获取DOM，比如获取DOM的宽高等。
  2. useRef不仅仅可以用于操作DOM，还可以操作组件。
*/
function App() {
  const inputRef = useRef(null)
  const add = () => {
    console.log(inputRef.current.add)
  }
  return (
    <div>
      <h1>Root Component</h1>
      <input type="text" placeholder="Input Something" ref={inputRef} />
      <button onClick={add}>Input</button>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
