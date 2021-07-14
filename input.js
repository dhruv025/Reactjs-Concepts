import React,{useState} from 'react';
import './App.css';

const App = () => {
  const [data,setData] = useState("empty");
  function getData(val){
    console.log(val.target.value);
    setData(val.target.value);
  }
  return(
    <div className="heading">
      <h2>Get Input Box Value</h2>
      <input type="text" onChange={getData}/>
      <h3>Input Box Value is {data}</h3>
    </div>
  );
}

export default App;
