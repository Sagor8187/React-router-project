import React from 'react'
import { Link } from 'react-router'

export default function Userinfo({data}) {
    let {name,username,email,id}=data
  return (
    <div style={{border:"2px solid black",padding:"5px",textAlign:"center"}}>Userinfo
        <h1>{name}</h1>
        <p>{username}</p>
        <p>{email}</p>
        <Link to={`/users/${id}`}>details</Link>
    </div>
  )
}
