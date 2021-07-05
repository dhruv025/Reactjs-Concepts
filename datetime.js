import React from 'react';

function App(){
    const fname = "Dhruv";
    const lname = "Goel";
    const datetime = new Date();
    return(
      <>
      <h3>{`Hello, My name is ${fname} ${lname}`}</h3>
      <p>Today's Date is {datetime.toLocaleDateString()}</p>
      <p>Current Time is {datetime.toLocaleTimeString()}</p>
      </>
    )
}
export default App;
