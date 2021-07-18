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
  componentDidUpdate(){
    console.log("componentDidUpdate called") 
  }
  render(){
    console.log("render called");
    return(
      <div className="heading">
        <h2>ComponentDidUpdate Life Cycle</h2>
        <h2>Name : {this.state.name}</h2>
        <button onClick={()=>{this.setState({name:"Dhruv Goel"})}}>Update Name</button>
      </div>
    );
  }
}

export default App;
