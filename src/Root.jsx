import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'

export default function Root() {
  return (
    <div>
        <Header></Header>
        <div style={{display:'flex',gap:"4px",alignItems:"center" ,listStyle:"none"}}> 
          <div>
            <ul>
              <li>home</li>
              <li>about</li>
              <li>learn</li>
              <li>lesson</li>
            </ul>
          </div>
             <Outlet></Outlet>
        </div>
       
    </div>
  )
}
