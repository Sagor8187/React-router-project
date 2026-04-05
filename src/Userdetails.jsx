import React, { use } from 'react'
import { useLoaderData } from 'react-router'

export default function Userdetails() {
    let users = useLoaderData()
   
  return (
    <div>
        <p>user details</p>
            <h1>{users.name}</h1>
            <h3>{users.username}</h3>
            <p>{users.email}</p>
    </div>
  )
}
