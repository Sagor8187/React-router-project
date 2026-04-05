import React from 'react'
import { useLoaderData } from 'react-router'
import Userinfo from './Userinfo'

export default function Users() {
    let user = useLoaderData()
    console.log(user)
  return (
    <div>Users:{user.map(item=>(<Userinfo key={item.id} data={item}></Userinfo>))}</div>
  )
}
