import React from 'react';

function App(){
    const fname = "Dhruv";
    const lname = "Goel";
    const img1 = "https://picsum.photos/200/300";
    const img2 = "https://picsum.photos/250/300";
    const img3 = "https://picsum.photos/300/300";
    const link = "http://www.google.com";
    return(
      <>
      <h3 contentEditable="true">{`Hello, My name is ${fname} ${lname}`}</h3>
      <img src = {img1} alt=""/>
      <img src = {img2} alt=""/>
      <a href = {link} target="_google"><img src = {img3} alt=""/></a>
      </>
    )
}
export default App;
