import React from 'react';
import './App.css';

function App(){
  const names = ['virat','anushka','rohit','ritika'];
  names.map((name)=>(
    console.log(name)
  ))
  const details = [
    {
      name : 'dhruv', phoneno : 8123456789, gmail : 'dhruv@gmail.com'
    },
    {
      name : 'rohit', phoneno : 8165437889, gmail : 'rohit@gmail.com'
    },
    {
      name : 'virat', phoneno : 8123980389, gmail : 'virat@gmail.com'
    }
  ]
  return(
    <div className="heading">
      <h2>ReactJs</h2>
      {
        details.map((detail,i)=>
          <h2 key={i}>{detail.name} {detail.phoneno} {detail.gmail}</h2>
        )
      }
    </div>
  );
}

export default App;
