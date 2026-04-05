import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from './Home';
import Root from './Root';
import Mobile from './Mobile';
import Header from './Header';
import Users from './Users';
import Userdetails from './Userdetails';
export default function App() {
  let router = createBrowserRouter([
    {path:'/',Component:Root,children:[
      {index:true,Component:Home},
      {path:"mobile",Component:Mobile},
      {path:"header",Component:Header},
      {path:"users",loader:()=> fetch("https://jsonplaceholder.typicode.com/users"),Component:Users},
      {path:"users/:id",loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    ,Component:Userdetails},
    ]},
    {path:'/about',element:<div>this is about page</div>},
    {path:'*',element:<span>404 Page not found</span>}
    
])
  return (
   <RouterProvider router={router}>
      
     

   </RouterProvider>
  )
}
