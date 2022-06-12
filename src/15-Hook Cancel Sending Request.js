import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios'
// Hook Cancel Sending Request
function App() {
  const [list, setList] = useState([])
  useEffect(() => {
    let isCancel = false
    const getList = async () => {
      const res = await axios.get('http://geek.itheima.net/v1_0/channels')
      // 如果发送请求过程中，直接跳转到别的组件，也就是说当前组件销毁了，就会执行return里的函数，改变 isCancel = true。
      // 但是请求还会回来调用setList，防止调用setList，可以让请求回来后直接用isCancel=true，return出去，从而不执行setList。
      if (isCancel) return
      setList(res.data.data.channels)
    }
    getList()
    return () => {
      // 如果组件销毁了，可以取消请求，不过请求取消不了。
      isCancel = true
    }
  }, [])

  return (
    <div>
      <h1>Root Component</h1>
      <h3>Channels</h3>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
