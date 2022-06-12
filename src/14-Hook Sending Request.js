import { createRoot } from 'react-dom/client'
import axios from 'axios'
import { useEffect, useState } from 'react'

// Hook Sending Request
function App() {
  const [list, setList] = useState([])
  useEffect(() => {
    async function getList() {
      const res = await axios.get('http://geek.itheima.net/v1_0/channels')
      // console.log(res)
      setList(res.data.data.channels)
    }
    getList()
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
