import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios'

function App() {
  const [list, setList] = useState([])
  useEffect(() => {
    let isCancel = false
    const getList = async () => {
      const res = await axios.get('http://geek.itheima.net/v1_0/channels')
      if (isCancel) return
      setList(res.data.data.channels)
    }
    getList()
    return () => {
      isCancel = true
    }
  }, [])
  return (
    <div>
      <h1>Root Component</h1>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
