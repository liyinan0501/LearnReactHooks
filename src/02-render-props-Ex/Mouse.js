import { Component } from 'react'

export default class Mouse extends Component {
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
    return this.props.render(this.state)
  }
}
