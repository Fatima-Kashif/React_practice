import BgChangebtn from "./components/BgChangeBtn"
import ColorCard from "./components/Card"
import { ThemeContextProvider } from "./context/ThemeContext.jsx"
import { useState } from "react"

function App() {

  return (
    <ThemeContextProvider >
    <div className="flex justify-end mr-6 mt-6">
    <BgChangebtn/>
     </div>
    <div className="flex justify-center items-center min-h-[80vh]">
     <ColorCard/>
     </div>
    </ThemeContextProvider>
  )
}

export default App
