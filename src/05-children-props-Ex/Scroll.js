import { Component } from 'react'
import PropTypes from 'prop-types'

export default class Scroll extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  }

  state = {
    top: 0,
    left: 0,
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll)
  }
  scroll = () => {
    this.setState({
      top: window.pageYOffset,
      left: window.pageXOffset,
    })
  }

  render() {
    return this.props.children(this.state)
  }
}
