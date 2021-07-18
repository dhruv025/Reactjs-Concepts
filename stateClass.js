import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      name:"Dhruv Goel"
    }
  }
  render(){
    return(
      <div className="heading">
        <h2>Software Developer {this.state.name}</h2>
      </div>
    );
  }
}

export default App;
