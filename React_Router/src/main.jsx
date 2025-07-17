import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import BlogPage from './pages/Blogs.jsx'
import Work from './pages/howItWorks.jsx'
import User from './components/User.jsx'
import Github, { Githubdata } from './components/Github.jsx'
// const router=createBrowserRouter([{
//   path:'/',
//   element:<App/>,
//   children:[ // as many component we want we will add in the childrens array
//     {
//       path:'',
//       element:<Home/>
//     },
//     {
//       path:'/blogs',
//       element:<BlogPage/>
//     },
//     {
//       path:'/howitworks',
//       element:<Work/>
//     }

//   ]
// }])

// another way to make router
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='blogs' element={<BlogPage/>}/>
      <Route path='howitworks' element={<Work/>}/>
      <Route path='user/:userid' element={<User/>}
      // if we want to some parameters through the path we can give it here and get its value in the element that we are rendering on that path
      // the variable that you are giving after : it is very important bacause by this name you'll get its value in the repectie component
      />
      <Route 
      //you can pass callback function here  too but it is not much appropriate so you can define function in the same component and import and call it here in loader
      loader={Githubdata} //now we have to get its value in component to show it
      // pass function in a callback
      path='github' 
      element={<Github/>}/>
      </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
