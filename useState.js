import React,{useState} from 'react';
import './App.css';

const App = () => {
  const [data,setData] = useState("Dhruv");
  function updateData(){
    setData("Developer");
  }
  return(
    <div className="heading">
      <h2>{data}</h2>
      <button onClick={updateData}>Click Me</button>
    </div>
  );
}

export default App;
