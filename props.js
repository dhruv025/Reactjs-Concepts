import React,{useState} from 'react';
import './App.css';
import Student from './Student';

const App = () => {
  const [name,setName] = useState("Dhruv");
  return(
    <div className="heading">
      <h2>Props</h2>
      <Student data={name}/>
      <button onClick={()=>{setName("Dhruv Goel")}}>Update Name</button>
    </div>
  );
}

export default App;


import React from 'react';

function Student(props){
    // console.log(props);
    // Object
    // data: "Dhruv Goel"
    return(
        <div>
            <h3>My Name is {props.data}</h3>
        </div>
    );
}

export default Student;
