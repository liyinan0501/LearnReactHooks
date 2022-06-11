import React, { Component } from 'react'
// 高阶函数-接收一个普通组件
export default function withMouse(Base) {
  class Mouse extends Component {
    state = {
      x: 0,
      y: 0,
    }

    componentDidMount() {
      document.addEventListener('mousemove', this.move)
    }

    componentWillUnmount() {
      document.removeEventListener('mousemove', this.move)
    }

    move = (e) => {
      this.setState({
        x: e.pageX,
        y: e.pageY,
      })
    }

    render() {
      return <Base {...this.state}></Base>
    }
  }
  return Mouse
}
