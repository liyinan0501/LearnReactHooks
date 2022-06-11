import React from 'react'
import { createRoot } from 'react-dom/client'
import Cat from './Cat'
import Position from './Position'
import withMouse from './withMouse'

// HOC
// Higher Order Component
// 高阶组件
// 高阶组件是一个函数，接收要包装的组件，返回增强后的组件。
// 增强组件 <= 高阶组件(普通组件)
// 命名：withXXX，withScroll， withMouse，withRouter

const CatWithMouse = withMouse(Cat)
const PositionWithMoutse = withMouse(Position)
const App = (
  <div>
    <h1>Root Component</h1>
    <CatWithMouse></CatWithMouse>
    <PositionWithMoutse></PositionWithMoutse>
  </div>
)

createRoot(document.getElementById('root')).render(App)
