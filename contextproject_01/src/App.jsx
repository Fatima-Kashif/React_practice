import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextState from "./context/usercontext.jsx"


function App() {

// here we don't have to write provide because we have done in the component already we just have to pass the component here
  return (
    <UserContextState> 
      <Login/>
      <Profile/>
   </UserContextState>
  )
}

export default App
