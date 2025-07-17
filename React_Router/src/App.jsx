import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import BlogPage from "./pages/Blogs"
import Work from "./pages/howItWorks"

function App() {
  
  return (
    <>
{/* <div class="bg-gradient-to-r from-orange-400 to-pink-500 p-10">
  <p class="text-white">Gradient background</p>
</div> */}
<Navbar/>
{/* <Home/> */}
{/* <BlogPage/> */}
{/* <Work/> */}
<Outlet/>
<Footer/>
 </>
  )
}

export default App
