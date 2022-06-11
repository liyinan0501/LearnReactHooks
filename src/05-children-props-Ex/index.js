import React from 'react'
import { createRoot } from 'react-dom/client'
import Scroll from './Scroll'

const App = (
  <div style={{ height: 10000, width: 10000 }}>
    <h1>Root Component</h1>
    <Scroll>
      {({ top, left }) => (
        <div style={{ position: 'fixed' }}>
          ({left} ------ {top})
        </div>
      )}
    </Scroll>
  </div>
)

createRoot(document.getElementById('root')).render(App)
