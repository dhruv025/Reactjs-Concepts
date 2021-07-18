import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      name:"Dhruv"
    }
    console.log("constructor called");
  }
  componentDidMount(){
    console.log("componentDidMount called");
  }
  render(){
    console.log("render called");
    return(
      <div className="heading">
        <h2>ComponentDidMount Life Cycle</h2>
        <h3>State : {this.state.name}</h3>
        <button onClick={()=>{this.setState({name:"Dhruv Goel"})}}>Update State</button>
      </div>
    );
  }
}

export default App;
