import React from 'react';
import './App.css';
import {BrowserRouter,Link,Route} from 'react-router-dom';

function App(){
  return(
    <div className="heading">
      <BrowserRouter>
        <Link to="/home">Home Page</Link>
        <br/>
        <Link to="/about">About Page</Link>
        <Route path="/home"><Home/></Route>
        <Route path="/about"><About/></Route> 
      </BrowserRouter>
    </div>
  );
}

function Home()
{
  return(
    <div>
      <h2>Home Page</h2>
      <p>This is the home page.</p>
    </div>
  )
}

function About()
{
  return(
    <div>
      <h2>About Page</h2>
      <p>This is the about page.</p>
    </div>
  )
}

export default App;
