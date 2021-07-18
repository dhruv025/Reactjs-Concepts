import React from 'react';
import './App.css';
import User from './User';

class App extends React.Component{
  render(){
    return(
      <div className="heading">
        <h2>Render Life Cycle</h2>
        <User/>
      </div>
    );
  }
}

export default App;


import React from 'react';

class User extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Dhruv"
        }
    }
    render(){
        console.log("Render method called",this.state.name)
        return(
            <div>
                <h2>Software Developer - {this.state.name}</h2>
                <button onClick={()=>{this.setState({name:"Dhruv Goel"})}}>Update Name</button>
            </div>
        );
    }
}

export default User;
