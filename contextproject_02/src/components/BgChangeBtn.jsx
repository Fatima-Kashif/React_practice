import { useEffect, useState } from "react";
import useBgTheme from "../context/ThemeContext.jsx";

function BgChangebtn(){
   const {bgcolor,changeTheme}=useBgTheme()
   let [icon,setIcon]=useState('moon.svg') 
   useEffect(()=>{
setIcon(bgcolor==='black'?'sun.ico':'moon.svg') // should  e inside use Effect otherwise it will re render infinite times
   })
   


    useEffect(()=>{
            const body=document.querySelector('body')
            body.style.backgroundColor=bgcolor
        },[bgcolor])
    return(
        <>
        <button className="p-1 rounded-lg border-2 cursor-pointer text-gray-300  hover:bg-gray-300 transition duration-300 shadow-md" onClick={changeTheme}><img src={icon} alt="button" className="w-[30px] h-[30px]" /></button>    
        </>
    )
}
export default BgChangebtn;