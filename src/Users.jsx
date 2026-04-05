import React from 'react'
import { useLoaderData } from 'react-router'

export default function Users() {
    let user = useLoaderData()
    console.log(user)
  return (
    <div>Users:{user.map(item=><h3 key={item.id}>{item.name}</h3>)}</div>
  )
}
