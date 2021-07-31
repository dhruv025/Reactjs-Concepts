import React from 'react';
import './App.css';
import User from './User';

function App(){
  function Parent(name)
  {
    alert(`data accepted from child component : ${name}`);
  }
  return(
    <div className="heading">
      <h2>Lifting State Up</h2>
      <User child={Parent}/>
    </div>
  );
}

export default App;


import React from 'react';

function User(props){
    let name = "Dhruv Goel";
    return(
        <div>
            <h2>User</h2>
            <button onClick={()=>{props.child(name)}}>Click Me</button>
        </div>
    );
}

export default User;
