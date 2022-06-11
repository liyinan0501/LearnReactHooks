import React from 'react'
import { createRoot } from 'react-dom/client'
import Mouse from './Mouse'
import Cat from './Cat'
import Position from './Position'

const App = (
  // children-props
  <div>
    <h1>Root Component</h1>
    <Mouse>{(state) => <Cat {...state}></Cat>}</Mouse>
    <Mouse>{({ x, y }) => <Position x={x} y={y}></Position>}</Mouse>
  </div>
)

createRoot(document.getElementById('root')).render(App)
