import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import img from './01-render-props/1.gif'

// Hook Self Defining
//! 自定义hook 名字必须以use开头！
function useMouse() {
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
  return position
}

//! 自定义hook 名字必须以use开头！
function useScroll() {
  const [position, setPosition] = useState({
    left: 0,
    top: 0,
  })
  const scroll = () => {
    setPosition({
      left: window.pageXOffset,
      top: window.pageYOffset,
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', scroll)
    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [])
  return position
}

function App() {
  const { x, y } = useMouse()
  const { left, top } = useScroll()
  return (
    <div style={{ height: 10000, width: 10000 }}>
      <h3>Root Component</h3>
      <div style={{ position: 'fixed' }}>
        ({left}, {top})
      </div>
      <img src={img} alt="" style={{ position: 'fixed', left: x, top: y }} />
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
