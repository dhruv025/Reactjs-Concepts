import React, {useState,useEffect} from 'react';
import './App.css';

function App(){
  const [count,setCount] = useState(0);
  useEffect(()=>{
    console.log("useEffect called");
  })
  return(
    <div className="heading">
      <h2>useEffect Hook</h2>
      <h2>Count : {count}</h2>
      <button onClick={()=>{setCount(count+1)}}>Update Count</button>
    </div>
  );
}

export default App;
