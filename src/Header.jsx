import React from 'react'
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div>
       <nav style={{display:"flex",justifyContent:"space-evenly"}}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/mobile">About</NavLink>
      
      <NavLink to="/users">user </NavLink>
    </nav>
    </div>
  )
}
