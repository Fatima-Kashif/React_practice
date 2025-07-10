import { useState } from "react"

function BgChanger(){
    let [color,setColor]=useState('beige')
    return(
        <>
        <div className={`h-screen w-full ${color} flex items-end justify-center`} >
            <div className="flex justify-center rounded-3xl mb-3 gap-3 w-3xl bg-amber-50 p-2  text-amber-50">
                <button onClick={()=>{setColor('bg-green-700')}} className="bg-green-700  p-2 w-20 border-none rounded-3xl ">Green</button>
                <button onClick={()=>{setColor('bg-purple-600')}}className="bg-purple-600 p-2 w-20 border-none rounded-3xl ">Purple</button>
                <button onClick={()=>{setColor('bg-pink-600')}} className="bg-pink-600 p-2 w-20 border-none rounded-3xl ">Pink</button>
                <button onClick={()=>{setColor('bg-yellow-500')}} className="bg-yellow-500 p-2 w-20 border-none rounded-3xl ">Yellow</button>
                <button onClick={()=>{setColor('bg-black')}} className="bg-black p-2 w-20 border-none rounded-3xl">Black</button>
            </div>  

        </div>
        </>
    )
}
export default BgChanger