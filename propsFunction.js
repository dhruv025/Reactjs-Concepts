import React from 'react';
import './App.css';
import User from './User';

const App = () => {
  function getData(){
    alert("function called");
  }
  return(
    <div className="heading">
      <User data={getData}/>
    </div>
  );
}

export default App;


import React from 'react';

function User(props){
    return(
        <div>
            <h2>User Component</h2>
            <button onClick={()=>props.data()}>Click Me</button>
        </div>
    );
}

export default User;
