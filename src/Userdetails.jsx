import React, { use } from 'react'
import { useLoaderData, useNavigate } from 'react-router'

export default function Userdetails() {
    let users = useLoaderData()
   let navigate = useNavigate()
  return (
    <div>
        <p>user details</p>
            <h1>{users.name}</h1>
            <h3>{users.username}</h3>
            <p>{users.email}</p>
            <button onClick={()=>navigate('/mobile')}>Home page</button>
    </div>
  )
}
