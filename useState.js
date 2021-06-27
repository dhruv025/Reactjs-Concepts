//useState hook

import React, {useState} from 'react';

function App() {
  const[name,setName] = useState("");
  const[flag,setFlag] = useState(false);
  const[steps,setSteps] = useState(0);
  const[names,setNames] = useState([]);

  function changeName(){
    console.log("Clicked");
    return setFlag(!flag);
  }

  function increment(){
    return setSteps(steps+1);
  }

  function decrement(){
    return setSteps(steps-1);
  }

  function addNames(e){
    e.preventDefault();
    setNames([...names,{id:names.length, name}]);
    setName("");
  }

  return (
      <div className="heading">
      <h3>Hello, {flag ? name : "Anushka"}</h3>
      <button onClick={changeName}>Click Me</button>
      <hr></hr>
      <button onClick={increment}>Click Me to Add</button>
      <h3>{steps}</h3>
      <button onClick={decrement}>Click Me to Sub</button>
      <hr></hr>
      <form onSubmit={addNames}>
        <input type="text" placeholder="Add Names" value={name} onChange={(e)=> setName(e.target.value)}/>
        <button>Submit</button>
      </form>
      <ul>
        {names.map((item)=>(
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
