import { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/usercontext";


function Login(){
    let [username,setUsername]=useState('')
    let [password,setPassword]=useState('')

    const {setUser} =useContext(UserContext) // we have to pass correct context to get the value 
    // we have to set the empty container which userContext and userContext State is the way to fill it up so if you have to set or get the value you have to use useContext
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})  // I am passing username and password to set in user global state which is in usercontext so that its value can access from other components as well

    }
    return(
        <>
        <div>
            <input type="text" placeholder="username" value={username} onChange={(e)=>{
                setUsername(e.target.value)
            }} />
            <input type="password" placeholder="password" value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
            <button onClick={handleSubmit}>Login</button>
            
            

        </div>
        </>
    )
}
export default Login;