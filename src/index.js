import React from 'react'
import { createRoot } from 'react-dom/client'

class App extends React.Component {
  state = {
    count: 0,
  }
  componentDidMount() {
    document.title = `Counter: ${this.state.count}`
  }
  componentDidUpdate() {
    document.title = `Counter: ${this.state.count}`
  }
  render() {
    return (
      <div>
        <h1>Root Component</h1>
        <div>Counter: {this.state.count}</div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click +1
        </button>
      </div>
    )
  }
}

createRoot(document.getElementById('root')).render(<App />)
