import React from 'react'
import { createRoot } from 'react-dom/client'
import Cat from './Cat'
import Position from './Position'
import Mouse from './Mouse'

const element = (
  // 组件复用
  // Mouse.js 封装成一个复用组件
  <div>
    <h1>Root Component</h1>
    <Mouse render={(state) => <Position {...state}></Position>}></Mouse>
    <Mouse render={({ x, y }) => <Cat x={x} y={y}></Cat>}></Mouse>
  </div>
)

createRoot(document.getElementById('root')).render(element)
