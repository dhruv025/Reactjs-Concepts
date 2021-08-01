import React from 'react';
import './App.css';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';

function App(){
  return(
    <div className="heading">
      <BrowserRouter>
        <Link to="/">Home Page</Link>
        <br/><br/>
        <Link to="/about">About Page</Link>
        <br/><br/>
        <Link to="/login">Login Page</Link>
        <Switch>
          <Route path="/" exact={true}><Home/></Route>
          <Route path="/about"><About/></Route> 
          <Route path="*"><NotFound/></Route> 
        </Switch>
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

function NotFound()
{
  return(
    <div>
      <h2>404 NotFound</h2>
      <p>This page is NotFound.</p>
    </div>
  )
}

export default App;
