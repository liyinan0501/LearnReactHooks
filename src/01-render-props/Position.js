// 需要：在网页中，实时显示当前鼠标的位置
import React, { Component } from 'react'

export default class Position extends Component {
  render() {
    return (
      <div>
        <h3>Position of current mouse</h3>
        <div>
          ({this.props.x}, {this.props.y})
        </div>
      </div>
    )
  }
}
