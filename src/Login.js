import React, {useState} from "react";

function Login(){
    // states for user validation and data
    const [user, setUser] = useState('');
    const [password, setPass] = useState('');

    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);


    function loginhandle(e){
        console.log(user, password);
        if(user.length<3 || password.length<3){
            alert('Please type correct value');
        }else{
            alert('All good');
        }
        e.preventDefault();
    }
    function UserHanler(e){
        let item=e.target.value;
        if(item.length<3){
            setUserErr(true);
        }else{
            setUserErr(false);
        }
        setUser(item);

    }
    function PassHanler(e){
        let item=e.target.value;
        if(item.length<3){
            setPassErr(true);
        }else{
            setPassErr(false);
        }
        setPass(item);

    }
    return(
        <div>
        <h1>Login From in React </h1>
        <form onSubmit={loginhandle}>
            <input type="text" placeholder="Name" onChange={UserHanler}/><span>{userErr? <span>User is not Valid</span> :"" }</span><br/><br/>
            <input type="password" placeholder="Password" onChange={PassHanler}/><span>{passErr? <span>Password is not Valid</span> :"" }</span>
            <button type="submit">Submit</button>

        </form>
        </div>
    )
}

export default Login;