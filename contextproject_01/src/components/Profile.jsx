import { useContext } from "react";

import UserContext from "../context/usercontext";

function Profile(){
    // let name=useContext(UserContext.user) // you cant access the value like this
    const {user}=useContext(UserContext)
    if(!user){
        return(
            <p>User's data is not available</p>
        )
    }
    else{
    return(
        <p>User's data: {user.username} and {user.password}</p> 
    )
}
}
export default Profile;