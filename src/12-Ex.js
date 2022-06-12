import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import img from './01-render-props/1.gif'

function Cat() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.pageX,
        y: e.pageY,
      })
    }
    document.addEventListener('mousemove', move)
    return () => {
      document.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <img
      src={img}
      alt=""
      style={{ position: 'fixed', left: position.x, top: position.y }}
    />
  )
}

createRoot(document.getElementById('root')).render(<Cat />)
