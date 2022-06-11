import React from 'react'
import { createRoot } from 'react-dom/client'
import Mouse from './Mouse'
import Cat from './Cat'
import Position from './Position'

const App = (
  <div>
    <h1>Root Component</h1>
    <Mouse render={(state) => <Cat {...state}></Cat>}></Mouse>
    <Mouse render={({ x, y }) => <Position x={x} y={y}></Position>}></Mouse>
  </div>
)

createRoot(document.getElementById('root')).render(App)
