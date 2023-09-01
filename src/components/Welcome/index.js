import {Component} from 'react'

class Welcome extends Component {
  render() {
    const {user} = this.props
    return <h1> Hello, {user}</h1>
  }
}

export default Welcome
