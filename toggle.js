import React,{useState} from 'react';
import './App.css';

const App = () => {
  const [data,setData] = useState(false);
  function toggleData(){
    setData(!data);
  }
  return(
    <div className="heading">
      {data ? <h2>ReactJs</h2> : <h2>Angular</h2>}
      <button onClick={toggleData}>Toggle</button>
    </div>
  );
}

export default App;
