import React from 'react';
import './App.css';

const App = () => {
  function Apple(){
    alert("Hello from Apple");
  }
  return(
    <div className="heading">
      <h2>ReactJs</h2>
      <button onClick={Apple}>Click Me</button>
    </div>
  );
}

export default App;
