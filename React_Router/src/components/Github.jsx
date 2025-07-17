import { useState,useEffect } from "react"
import { useLoaderData } from "react-router-dom";


function Github(){
    // const URL='https://api.github.com/users/Fatima-Kashif' 
    let followers=useLoaderData()
    // let [followers,setFollowers]=useState([])
    // // useEffect function can't be async you have make the inner function async
    // useEffect(()=>{
    //     const fetchData=async ()=>{
    //    let res=await fetch(URL)
    //    let data=await res.json()
    //    // we can't see data without saving it in a variable and in react we have to make state for it
    //    setFollowers(data)
    //     }
    //     fetchData()
    // },[])
    return(
        <>
        <p className='text-3xl p-4 bg-amber-300'>Followers: {followers.followers}</p>


        
        </>
    )
}
export default Github;

export const Githubdata=async()=>{
const URL='https://api.github.com/users/Fatima-Kashif'
let res=await fetch(URL)
return res.json()

}
//it is giving me error by making the function with function keyword and then exporting by ES module export default
