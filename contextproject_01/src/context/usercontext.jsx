import React,{ useState } from "react";
import UserContext from "./usercontext";

function UserContextState({children}){
    // we'll make a variable
    const [user,setUser]=useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}> 
        {/* I am passing variable that I want that this component has access to in an object because there multiple variables*/}
            {children}
        </UserContext.Provider>
    )
}
export default UserContextState;