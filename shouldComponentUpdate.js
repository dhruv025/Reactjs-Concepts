import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    console.log("constructor called");
    super();
    this.state={
      count:0
    }
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate called", this.state.count);
    return true;
  }
  render(){
    console.log("render called");
    return(
      <div className="heading">
        <h2>shouldComponentUpdate Life Cycle</h2>
        <h2>Count : {this.state.count}</h2>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update Count</button>
      </div>
    );
  }
}

export default App;
