import { useState } from "react";
import { Link } from "react-router-dom";
// import User from "./User";
// import Admin from "./Admin";

const Login =()=> {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [a, setA] = useState('');

    // let a = '';
    const login=()=> {
        if ('Admin' === userName && "password" === password) {
               console.log('Admin logged in');
                setA("/admin");
                // a = '<Link to="/admin">Log in</Link>';
                alert('Admin has logged in.');
                console.log(a);
           
        }else if('User' === userName && 'password' === password){
            console.log('User logged in')
            // return 
                setA("/user");
                alert('User has logged in.')
                // a  = '<Link to="/user">Log in</Link>';
                console.log(a);
        } else {
            return (
                alert('Please enter correct User Name or Password')
            )
        }
    }

    return (
        <center>
            <legend border={2}>
                <h3>Log in</h3>
                User Name: <input id='username' onChange={(e)=>setUserName(e.target.value)}/> <br/><br/>
                Password: <input id='password' onChange={(e)=>setPassword(e.target.value)}/> <br/><br/>

                <Link to={a}><button onClick={()=>login()}>Log in</button></Link>
                {/* <button onClick={(a)=>login(a)}>{a}</button>
                <button onClick={(a)=>login(a)}><Link to={a}>Log in</Link></button> */}
                {/* <button onClick={()=>login()}>Log in</button> */}
            </legend>
        </center>
    )
}
export default Login;