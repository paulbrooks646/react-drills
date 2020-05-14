import React, {Component} from 'react';

export default class Login extends Component {

  constructor() {
    super()

    this.state = {
      username: "",
      password: ""
    }
    this.handleClick = this.handleClick.bind(this)
  }
handleName(value) {
  this.setState({username: value})
}
handlePass(value) {
    this.setState({password: value})
  }
  handleClick() {
      alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }



render() {

return(
  <div className="App">
    <input type="name" onChange={e => this.handleName(e.target.value)}/>
    <input type="password" onChange={ e => this.handlePass(e.target.value)}/>
    <button onClick={this.handleClick}>Login</button>
  </div>
)
}
}
