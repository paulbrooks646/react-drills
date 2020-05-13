import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


export default class App extends Component {
  constructor() {

super()

this.state = {
 list: ["Splash Mountain", "Space Mountain", "The Matterhorn", "Thunder Mountain Railroad", "Indiana Jones"]
}}

render() {
let disneyland = this.state.list.map((element, index) => {
  return <h2 key={index}>{element}</h2>
})
  return(
<div className="App">
{disneyland}
</div>
  )
}


  
}