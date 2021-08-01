import React from 'react';
import './App.css';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import User from './User';

function App(){
  let users = [
    {id: 1, name: 'dhruv', email: 'dhruv@gmail.com'},
    {id: 2, name: 'rohit', email: 'rohit@gmail.com'},
    {id: 3, name: 'virat', email: 'virat@gmail.com'},
    {id: 4, name: 'dhoni', email: 'dhoni@gmail.com'}
  ]
  return(
    <div className="heading">
      <BrowserRouter>
        <h2>Dynamic Routing</h2>
        {
          users.map((user)=>
          <div>
            <Link to={"/user/"+user.id+"/"+user.name}><h2>{user.name}</h2></Link>
          </div>)
        }
        <Route path="/user/:id/:name"><User/></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;


import React from 'react';
import {withRouter} from 'react-router-dom';
function User(props){
    console.log(props);
    return(
        <div>
            <h2>User Id : {props.match.params.id}</h2>
            <h2>User Id : {props.match.params.name}</h2>
        </div>
    );
}

export default withRouter(User);
