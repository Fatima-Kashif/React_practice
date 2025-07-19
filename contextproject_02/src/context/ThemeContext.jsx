import { createContext,useContext, useState } from "react";

const ThemeContext=createContext({
  bgcolor:'white',
  color:'black',
  changeTheme:()=>{
  }  
})

export const ThemeContextProvider=({children})=>{
    const [bgcolor,setBgcolor]=useState('white')
    const [color,setColor]=useState('black')
    const changeTheme=()=>{
        if (bgcolor==='black'){
            setBgcolor('white')
            setColor('black')
        }
        else{
             setBgcolor('black')
            setColor('white')
        }
    }
    return(
        <ThemeContext.Provider value={{bgcolor,color,changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

// we are making a custom hook to use color context that when we call it the values should be accessed
const useBgTheme=()=>{
    return useContext(ThemeContext)
}

export default useBgTheme;
