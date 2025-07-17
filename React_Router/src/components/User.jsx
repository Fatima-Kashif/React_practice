import { useParams } from "react-router-dom";

function User(){
    const {userid} =useParams() // I gave the variable name in the path of this component
    // it doesnot matter if the value is variable or a number
    return(
        <>
        <p>User:{userid}</p>
        
        </>
    )
}
export default User;