import React from 'react';
import './App.css';

function App(){
    const fname = "Dhruv";
    const lname = "Goel";
    const img1 = "https://picsum.photos/200/300";
    const img2 = "https://picsum.photos/250/300";
    const img3 = "https://picsum.photos/300/300";
    const link = "http://www.google.com";
    return(
      <>
      <h3 className="heading">{`Hello, My name is ${fname} ${lname}`}</h3>
      <div className="img-div">
        <img src = {img1} alt=""/>
        <img src = {img2} alt=""/>
        <a href = {link} target="_google"><img src = {img3} alt=""/></a>
      </div>
      </>
    )
}
export default App;
