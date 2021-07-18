import React from 'react';
import './App.css';
import Student from './Student';

class App extends React.Component{
  constructor(){
    console.log("constructor called");
    super();
    this.state={
      show:true
    }
  }
  componentDidMount(){
    console.log("componentDidMount called");
  }
  componentDidUpdate(){
    console.log("componentDidUpdate called");
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate called");
    return true;
  }
  render(){
    console.log("render called");
    return(
      <div className="heading">
        <h2>componentWillUnmount Life Cycle</h2>
        {this.state.show?<Student/>:<h2>Student Component Removed</h2>}
        <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle Student Component</button>
      </div>
    );
  }
}

export default App;


import React from 'react';

class Student extends React.Component{
    componentWillUnmount(){
        console.log("componentWillUnmount called");
    }
    render(){
        return(
            <div>
                <h2>Student Component</h2>
            </div>
        );
    }
}

export default Student;
