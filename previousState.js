import React,{useState} from 'react';
import './App.css';

function App(){
  const [count,setCount] = useState(0);
  function updateCount()
  {
    let rand = Math.floor(Math.random()*10);
    setCount((prev)=>{
      console.log(prev);
      return rand;
    })
  }
  return(
    <div className="heading">
      <h2>Previous State</h2>
      <h2>Count : {count}</h2>
      <button onClick={updateCount}>Update State</button>
    </div>
  );
}

export default App;
