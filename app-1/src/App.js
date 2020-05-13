import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
     textBox : ""
    }
  }

  handleChange(value) {
    this.setState({textBox: value})
  }

  render() {

    return(
      <div className="App">
      <input onChange={e => this.handleChange(e.target.value)} type="text"/>
      <p>{this.state.textBox}</p>
    </div>
    )
  }

}




