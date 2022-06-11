// 作用：用于提供鼠标位置的逻辑，不负责去渲染解构
import { Component } from 'react'

export default class Position extends Component {
  state = {
    x: 0,
    y: 0,
  }
  move = (e) => {
    console.log(e.pageX, e.pageY)
    this.setState({
      x: e.pageX,
      y: e.pageY,
    })
  }
  componentDidMount() {
    document.addEventListener('mousemove', this.move)
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.move)
  }

  render() {
    return this.props.render(this.state)
  }
}
