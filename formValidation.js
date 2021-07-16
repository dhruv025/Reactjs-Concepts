import React,{useState} from 'react';

function Login(){
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    const [userErr,setUserErr] = useState(false);
    const [passwordErr,setPasswordErr] = useState(false);

    function loginHandle(e){
        if(user.length < 3 || password.length < 3)
            alert("Invalid User Id or Password");
        console.log(user);
        console.log(password);
        e.preventDefault();
    }

    function userHandle(e){
        let item = e.target.value;
        if(item.length < 3)
            setUserErr(true);
        else    
            setUserErr(false);
        setUser(item);
    }

    function passwordHandle(e){
        let item = e.target.value;
        if(item.length < 3)
            setPasswordErr(true);
        else    
            setPasswordErr(false);
        setPassword(item);
    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={loginHandle}>
                <input type="text" placeholder="Enter User Id" onChange={userHandle}/>
                {/* {userErr?<span>Invaid User</span>:""} */}
                <br/><br/>
                <input type="password" placeholder="Enter User Password" onChange={passwordHandle}/>
                {/* {passwordErr?<span>Invalid Password</span>:""} */}
                <br/><br/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
