import { useEffect, useState } from "react";
import useBgTheme from "../context/ThemeContext.jsx";

export default function ColorCard() {
    const{color,changeTheme}=useBgTheme()
    const[textcolor,setTextColor]=useState('white')
    useEffect(()=>{
        setTextColor(color==='black'?'white':'gray-800')
    })
    


  return (
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm text-center" style={{backgroundColor:color}}>
        <h2 className={`text-2xl font-bold mb-4 text-${textcolor} `} >Custom Card</h2>
        <p className={`text-gray-600 mb-6 text-${textcolor} `}>
          Click the button below to change the background color!
        </p>
        <button className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition duration-300 shadow-md" onClick={changeTheme}>
          Change Background
        </button>
      </div>
  );
}
