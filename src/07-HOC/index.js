import React from 'react'
import { createRoot } from 'react-dom/client'
import Cat from './Cat'
import Position from './Position'
import withMouse from './withMouse'
import withScroll from './withScroll'

// const CatWithMouse = withMouse(Cat)
// const PositionWithMouse = withMouse(Position)
const P = withScroll(withMouse(Position))
const App = (
  <div style={{ height: 10000, width: 10000 }}>
    <h1>Root Component</h1>
    <P money={100}></P>
  </div>
)

createRoot(document.getElementById('root')).render(App)
